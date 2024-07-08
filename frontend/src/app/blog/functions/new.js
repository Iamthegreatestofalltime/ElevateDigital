"use client";

import { useState } from 'react';
import axios from 'axios';
import RichTextEditor from '../../components/RichTextEditor';

export default function NewBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [generatedText, setGeneratedText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("FE start");

    try {
      const res = await axios.post('http://localhost:5100/api/backend', {
        title,
        content,
      });

      if (res.status === 201) {
        console.log("cool");
      }
    } catch (error) {
      console.error("Error posting blog:", error);
    }
  };

  const handleGenerateText = async () => {
    console.log("Generate text");
    try {
      const res = await axios.post('http://localhost:5100/generate-text', {
        title,
        content,
      });

      if (res.status === 200) {
        setGeneratedText(res.data.generatedText);
      }
    } catch (error) {
      console.error("Error generating text:", error);
    }
  };

  const handleSubmitGeneratedText = async () => {
    console.log("Submit generated text");
    try {
      const res = await axios.post('http://localhost:5100/api/backend', {
        title,
        content: generatedText,
      });

      if (res.status === 201) {
        console.log("Generated text submitted");
      }
    } catch (error) {
      console.error("Error submitting generated text:", error);
    }
  };

  return (
    <div>
      <h1>New Blog</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <RichTextEditor value={content} onChange={setContent} />
        </div>
        <button type="submit">Add Blog</button>
      </form>
      <button onClick={handleGenerateText}>Generate Text</button>
      <div>
        <h2>Generated Text</h2>
        <textarea
          value={generatedText}
          readOnly
        />
      </div>
      <button onClick={handleSubmitGeneratedText}>Submit Generated Text</button>
    </div>
  );
}