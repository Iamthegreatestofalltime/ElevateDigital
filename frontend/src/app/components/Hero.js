"use client"

import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';
import Image from 'next/image';
import upscaled from '../../../public/upscaled.png';

const DynamicSaasHero = () => {
  const [changingWord, setChangingWord] = useState('');
  const [codeText, setCodeText] = useState('');
  const staticText = "Ready to build the next world-changing";
  const changingWords = ["app", "SaaS", "website", "platform", "AI solution", "marketplace"];
  const [wordIndex, setWordIndex] = useState(0);
  
  const fullCodeText = `// Let's build something amazing
const createSolution = () => {
  return {
    innovative: true,
    scalable: true,
    userFriendly: true,
    performant: true
  }
}

// Your vision, our expertise
const result = createSolution();
console.log("Ready to launch!");`;

  useEffect(() => {
    let wordLetterIndex = 0;

    const wordTyping = setInterval(() => {
      if (wordLetterIndex <= changingWords[wordIndex].length) {
        setChangingWord(changingWords[wordIndex].slice(0, wordLetterIndex));
        wordLetterIndex++;
      } else {
        clearInterval(wordTyping);
        setTimeout(() => {
          setWordIndex((prevIndex) => (prevIndex + 1) % changingWords.length);
        }, 2000);
      }
    }, 100);

    return () => {
      clearInterval(wordTyping);
    };
  }, [wordIndex]);

  useEffect(() => {
    let codeIndex = 0;

    const codeTyping = setInterval(() => {
      setCodeText(prevText => {
        if (codeIndex <= fullCodeText.length) {
          codeIndex++;
          return fullCodeText.slice(0, codeIndex);
        } else {
          clearInterval(codeTyping);
          return prevText;
        }
      });
    }, 30);

    return () => {
      clearInterval(codeTyping);
    };
  }, []);

  return (
    <div className="relative text-white p-4 overflow-hidden" style={{
      paddingTop: 'var(--header-height, 5rem)',
      zIndex: 1
    }}>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          width: '90%',
          left: '5%',
          top: '5%',
          bottom: '-5%',
        }}
      ></div>
      
      <div className="relative z-10 max-w-[90%] w-full mx-auto pt-4 sm:pt-10">
        <h1 className="text-2xl sm:text-5xl md:text-4xl lg:text-5xl font-bold mb-4 text-center mx-auto px-4" style={{ maxWidth: '90%', lineHeight: '1.2' }}>
          {staticText}{' '}
          <br className="hidden sm:inline" />
          <span className="inline-block">
            <span
              style={{
                backgroundImage: 'linear-gradient(to right, var(--secondary--color-5), var(--secondary--color-6) 28%, var(--secondary--color-7) 50%, var(--secondary--color-8) 79%, var(--secondary--color-9))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundSize: '200% auto',
                animation: 'gradient 3s linear infinite',
              }}
            >
              {changingWord}
            </span>
            <span className="opacity-0">|</span>
          </span>
        </h1>
        
        <div className="relative mt-4 sm:mt-8 mb-8 sm:mb-16">
          <div 
            className="relative w-full max-w-[120%] mx-auto rounded-3xl overflow-hidden" 
            style={{ 
              backgroundImage: "url('https://assets-global.website-files.com/62a0a6786f26966e8073f40d/62a0a6786f26962e2c73f473_gradient-01-darkbit-template.svg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '0',
              paddingBottom: '56.25%', // Aspect ratio for 16:9
            }}
          >
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <Image 
                src={upscaled} 
                alt="Project Showcase" 
                className="rounded-3xl shadow-2xl"
                layout="responsive"
                objectFit="cover"
                width={1920} // Original image width
                height={1080} // Original image height
                sizes="(max-width: 640px) 130vw, (max-width: 1024px) 120vw, 190vw"
              />
            </div>
            <div className="hidden sm:block absolute top-4 left-4 w-2/3 lg:w-2/5 bg-gray-800 bg-opacity-90 p-4 rounded-lg shadow-xl">
              <div className="flex items-center mb-2">
                <Terminal size={20} className="mr-2 text-green-400" />
                <span className="font-mono text-sm text-green-400">vision-to-reality.js</span>
              </div>
              <pre className="font-mono text-xs text-green-400 whitespace-pre-wrap overflow-x-auto">
                {codeText}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicSaasHero;