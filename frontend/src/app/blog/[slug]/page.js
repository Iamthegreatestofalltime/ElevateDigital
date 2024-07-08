"use client";

import { useParams } from 'next/navigation';
import axios from 'axios';
import { useState, useEffect } from 'react';
import styles from './BlogPost.module.css';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import Image from 'next/image';
import parse, { domToReact } from 'html-react-parser';
import '../../globals.css';

const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

const BlogPost = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [toc, setToc] = useState([]);
  const [isTocVisible, setIsTocVisible] = useState(false);

  useEffect(() => {
    console.log("useEffect triggered with slug:", slug);

    if (slug) {
      console.log(`Fetching blog for slug: ${slug}`);
      axios.get('http://localhost:5100/api/backend')
        .then((response) => {
          console.log("Fetched blogs:", response.data);
          const matchedBlog = response.data.find((b) => {
            const parsedContent = parse(b.content);
            let title = 'No Title';
            
            parsedContent.forEach(node => {
              if (node.type === 'tag' && node.name === 'h1') {
                title = domToReact(node.children);
              }
            });
            
            const generatedSlug = generateSlug(title);
            console.log(`Matching slug: ${slug} with generated slug: ${generatedSlug}`);
            return generatedSlug === slug;
          });
          if (matchedBlog) {
            console.log("Matched blog found:", matchedBlog);
            setBlog(matchedBlog);

            const parsedContent = parse(matchedBlog.content);
            const tocArray = [];
            parsedContent.forEach((node, index) => {
              if (node.type === 'tag' && (node.name === 'h1' || node.name === 'h2')) {
                const id = `heading-${index}`;
                tocArray.push({
                  id,
                  text: domToReact(node.children),
                  level: node.name,
                });
              }
            });

            console.log("Generated TOC:", tocArray);
            setToc(tocArray);
          } else {
            console.log("No matching blog found for slug:", slug);
          }
        })
        .catch((error) => {
          console.error("Error fetching blog:", error);
        });
    } else {
      console.log("Slug is not available yet.");
    }
  }, [slug]);

  if (!blog) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <div className="animate-pulse text-blue-400 text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />
      <div className={styles.container}>
        <button className={styles.tocToggle} onClick={() => setIsTocVisible(!isTocVisible)}>
          {isTocVisible ? 'Hide Table of Contents' : 'Show Table of Contents'}
        </button>
        <div className={`${styles.sidebar} ${isTocVisible ? styles.show : ''}`}>
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Table of Contents</h2>
          <ul>
            {toc.map((item) => (
              <li key={item.id} className={styles[`toc-${item.level}`]}>
                <a href={`#${item.id}`} className="hover:text-blue-300 transition-colors duration-300">
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.content}>
          {blog.imageUrl && (
            <Image
              src={blog.imageUrl}
              alt={blog.title}
              className={styles.blogImage}
              width={800}
              height={400}
              layout="responsive"
            />
          )}
          <div 
            dangerouslySetInnerHTML={{ __html: blog.content }} 
            className="prose prose-invert max-w-none"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;