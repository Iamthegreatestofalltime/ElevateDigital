"use client";

import { useParams } from 'next/navigation';
import axios from 'axios';
import { useState, useEffect } from 'react';
import styles from './BlogPost.module.css';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import Image from 'next/image';
import '../../globals.css';

const BlogPost = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [toc, setToc] = useState([]);
  const [isTocVisible, setIsTocVisible] = useState(false);

  useEffect(() => {
    console.log("useEffect triggered with slug:", slug);

    const generateSlug = (title) => {
      return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with hyphens
        .replace(/(^-|-$)/g, ''); // Remove leading or trailing hyphens
    };

    if (slug) {
      console.log(`Fetching blog for slug: ${slug}`);
      axios.get('http://localhost:5100/api/backend')
        .then((response) => {
          console.log("Fetched blogs:", response.data);
          const matchedBlog = response.data.find((b) => {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = b.content;
            const h1 = tempDiv.querySelector('h1');
            const title = h1 ? h1.innerText : 'No Title';
            const generatedSlug = generateSlug(title);
            console.log(`Matching slug: ${slug} with generated slug: ${generatedSlug}`);
            return generatedSlug === slug;
          });
          if (matchedBlog) {
            console.log("Matched blog found:", matchedBlog);
            setBlog(matchedBlog);

            // Extract H1 and H2 tags for TOC
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = matchedBlog.content;
            const headings = tempDiv.querySelectorAll('h1, h2');
            const tocArray = Array.from(headings).map((heading, index) => {
              const id = `heading-${index}`;
              heading.id = id;
              return {
                id,
                text: heading.innerText,
                level: heading.tagName.toLowerCase(),
              };
            });

            console.log("Generated TOC:", tocArray);

            setToc(tocArray);
            setBlog({ ...matchedBlog, content: tempDiv.innerHTML });
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