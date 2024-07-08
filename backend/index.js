const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { execFile } = require('child_process');
require('dotenv').config();
const schedule = require('node-schedule');

const app = express();
const port = process.env.PORT || 5100;

// Use CORS middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const uri = 'mongodb+srv://alexlotkov124:Cupworld@cluster0.ue0pbaj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

if (!uri) {
  throw new Error('Please add your Mongo URI to .env');
}

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Blog schema
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    default: '', // Default to an empty string if no URL is provided
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Blog = mongoose.model('Blog', blogSchema);

// Planned Articles schema
const plannedArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    default: '', // Provide a default value but not required
  },
  dueDate: {
    type: Date,
    required: true,
  },
});

const PlannedArticle = mongoose.model('PlannedArticle', plannedArticleSchema);

// API routes
app.post('/api/backend', async (req, res) => {
  console.log("hit BE");
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required' });
  }

  try {
    const blog = new Blog({ title, content });
    await blog.save();
    res.status(201).json({ message: 'Blog added successfully' });
  } catch (error) {
    console.error('Error saving blog to database:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.post('/generate-text', async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required' });
  }

  try {
    const prompt = `Title: ${title}\nContent: ${content}\nWrite a continuation or additional content for this blog post.`;
    const pythonResponse = await new Promise((resolve, reject) => {
      execFile('python3', ['./GPT.py', prompt], (error, stdout, stderr) => {
        if (error) {
          console.error('Error calling Python script:', error);
          return reject(error);
        }
        if (stderr) {
          console.error('Python script stderr:', stderr);
          return reject(new Error(stderr));
        }
        resolve(stdout.trim());
      });
    });

    res.json({ generatedText: pythonResponse });
  } catch (error) {
    console.error('Error in /generate-text endpoint:', error);
    res.status(500).send('Error generating text');
  }
});

app.get('/api/backend', async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.status(200).json(blogs);
  } catch (error) {
    console.error('Error retrieving blogs from database:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Helper function to extract H1 tag
function extractH1Tag(content) {
  const h1Match = content.match(/<h1[^>]*>([^<]+)<\/h1>/);
  return h1Match ? h1Match[1] : "Untitled Article";
}

// Function to plan articles for the month
async function planMonthlyArticles() {
  console.log('Planning articles for the month at:', new Date().toLocaleString());

  const today = new Date();
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

  // Check if articles are already planned for the month
  const existingPlannedArticles = await PlannedArticle.find({
    dueDate: { $gte: firstDayOfMonth, $lte: lastDayOfMonth }
  });

  if (existingPlannedArticles.length > 0) {
    console.log("Articles are already planned for the month.");
    return;
  }

  // Retrieve existing article titles
  const existingArticles = await Blog.find({}, 'title');
  const existingTitles = existingArticles.map(article => article.title).join('\n');

  const prompt = `Here is a list of existing article titles:\n${existingTitles}\nGenerate a list of new article titles for each day of the month from ${firstDayOfMonth.toDateString()} to ${lastDayOfMonth.toDateString()}. The titles should not include dates and should be unique from the other titles, make sure they are only titles or article topics an example is "how to do content marketing for contractors 2024" like don't return listed as number just straight the text, also make it for local contractors with small businesses`;

  const pythonResponse = await new Promise((resolve, reject) => {
    execFile('python3', ['./GPT.py', prompt], (error, stdout, stderr) => {
      if (error) {
        console.error('Error calling Python script:', error);
        return reject(error);
      }
      if (stderr) {
        console.error('Python script stderr:', stderr);
        return reject(new Error(stderr));
      }
      resolve(stdout.trim());
    });
  });

  console.log(pythonResponse);

  const titles = pythonResponse.split('\n').map(title => title.trim()).filter(title => title && !/^<h\d>/.test(title));

  const plannedArticles = titles.map((title, index) => ({
    title,
    content: "",
    dueDate: new Date(today.getFullYear(), today.getMonth(), index + 1)
  }));

  await PlannedArticle.insertMany(plannedArticles);
  console.log('Planned articles for the month:', plannedArticles);
}

// Scheduler function
async function scheduleDailyArticles() {
  console.log('Scheduler triggered at:', new Date().toLocaleString());

  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set the time part to 00:00:00 for accurate comparison

  const startOfDay = new Date(today);
  const endOfDay = new Date(today);
  endOfDay.setHours(23, 59, 59, 999); // Set the end time of the day

  console.log('Searching for planned article for date:', today);

  const plannedArticle = await PlannedArticle.findOne({
    dueDate: { $gte: startOfDay, $lte: endOfDay }
  });

  if (plannedArticle) {
    console.log('Found planned article:', plannedArticle);

    const prompt = `Generate a full article for the title: ${plannedArticle.title}`;
    console.log('Sending prompt to OpenAI API:', prompt);

    const pythonResponse = await new Promise((resolve, reject) => {
      execFile('python3', ['./GPT.py', prompt], (error, stdout, stderr) => {
        if (error) {
          console.error('Error calling Python script:', error);
          return reject(error);
        }
        if (stderr) {
          console.error('Python script stderr:', stderr);
          return reject(new Error(stderr));
        }
        resolve(stdout.trim());
      });
    });

    console.log('Received response from OpenAI API:', pythonResponse);

    const blog = new Blog({ title: plannedArticle.title, content: pythonResponse });
    console.log('Saving new blog to database:', blog);

    await blog.save();
    console.log('Blog saved successfully.');

    await PlannedArticle.deleteOne({ _id: plannedArticle._id });
    console.log('Deleted planned article:', plannedArticle._id);
  } else {
    console.log("No articles scheduled for today. No action taken.");
  }
}

schedule.scheduleJob('21 14 * * *', () => {
  console.log('Scheduled job running at:', new Date().toLocaleString());
  scheduleDailyArticles();
});

// Schedule the monthly planning task at 12:00 AM on the first day of each month
schedule.scheduleJob('0 0 1 * *', () => {
  console.log('Monthly planning job running at:', new Date().toLocaleString());
  planMonthlyArticles();
});

// Check and plan articles if none are scheduled on server start
(async () => {
  console.log('Server starting. Checking for scheduled articles.');
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set the time part to 00:00:00 for accurate comparison

  const startOfDay = new Date(today);
  const endOfDay = new Date(today);
  endOfDay.setHours(23, 59, 59, 999); // Set the end time of the day

  const plannedArticle = await PlannedArticle.findOne({
    dueDate: { $gte: startOfDay, $lte: endOfDay }
  });

  if (!plannedArticle) {
    console.log("No articles scheduled for today. Planning articles now.");
    await planMonthlyArticles();
    console.log("Articles planned.");
  } else {
    console.log("Articles are already scheduled for today.");
  }
})();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});