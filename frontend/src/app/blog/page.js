"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    console.log('Fetching blogs from API...');
    axios.get('http://localhost:5100/api/backend')
      .then((response) => {
        console.log("Fetched blogs:", response.data);
        setBlogs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });
  }, []);

  const extractTitleAndSnippet = (content) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;
    const h1 = tempDiv.querySelector('h1');
    const title = h1 ? h1.innerText : 'No Title';
    const words = tempDiv.innerText.split(' ').slice(0, 25).join(' ') + '...';
    return { title, snippet: words };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-10">
        <Header />
        <div className="relative overflow-hidden rounded-3xl shadow-2xl mb-10 bg-opacity-10 bg-white backdrop-filter backdrop-blur-lg mt-32">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-10"></div>
          <div className="relative z-10 p-10">
            <h1 className="text-5xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Elevate Your Knowledge
            </h1>
            <ul className="space-y-8">
              {blogs.map((blog) => {
                const { title, snippet } = extractTitleAndSnippet(blog.content);
                const slug = generateSlug(title);
                return (
                  <li key={blog._id} className="bg-gray-800 bg-opacity-50 rounded-xl overflow-hidden transform hover:scale-105 transition duration-300">
                    <Link href={`/blog/${slug}`}>
                      <div className="p-6 hover:bg-gray-700 transition duration-300 flex flex-col md:flex-row">
                        {blog.imageUrl && (
                          <img
                            src={blog.imageUrl}
                            alt={title}
                            className="mb-4 w-full h-auto object-cover md:w-1/3 md:max-h-48 rounded-lg"
                          />
                        )}
                        <div className="md:ml-6">
                          <h2 className="text-2xl font-bold mb-2 text-blue-300">{title}</h2>
                          <p className="text-gray-300">{snippet}</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <style jsx global>{`
        body {
          background: linear-gradient(to bottom right, #1a202c, #2d3748);
        }
        .container {
          position: relative;
        }
        .container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url("https://assets-global.website-files.com/5837424ae11409586f837994/65da2485ff5fcdc97cd23ac3_dots.svg");
          opacity: 0.1;
          pointer-events: none;
        }
      `}</style>
      <Footer/>
    </div>
  );
}