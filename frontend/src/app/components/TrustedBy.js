"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const brandLogos = [
  { name: 'Facebook', src: 'https://assets-global.website-files.com/62a0a6786f26966e8073f40d/62a0a6786f2696a3ce73f46e_logo-1-darkbit-template.svg' },
  { name: 'YouTube', src: 'https://assets-global.website-files.com/62a0a6786f26966e8073f40d/62a0a6786f26966c8673f470_logo-2-darkbit-template.svg' },
  { name: 'Pinterest', src: 'https://assets-global.website-files.com/62a0a6786f26966e8073f40d/62a0a6786f2696b27173f472_logo-3-darkbit-template.svg' },
  { name: 'Twitch', src: 'https://assets-global.website-files.com/62a0a6786f26966e8073f40d/62a0a6786f2696205c73f46d_logo-4-darkbit-template.svg' },
  { name: 'Webflow', src: 'https://assets-global.website-files.com/62a0a6786f26966e8073f40d/6528664a4f8de943e3dcfd1d_webflow-logo.svg' },
  { name: 'Google', src: 'https://assets-global.website-files.com/62a0a6786f26966e8073f40d/62a0a6786f26962d0473f46f_logo-6-darkbit-template.svg' },
];

const TrustedBy = () => {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (scroller) {
      const scrollerContent = scroller.innerHTML;
      scroller.innerHTML += scrollerContent; // Duplicate content for seamless scrolling

      const stopScroll = () => {
        scroller.style.animationPlayState = 'paused';
      };

      const startScroll = () => {
        scroller.style.animationPlayState = 'running';
      };

      scroller.addEventListener('mouseenter', stopScroll);
      scroller.addEventListener('mouseleave', startScroll);

      return () => {
        scroller.removeEventListener('mouseenter', stopScroll);
        scroller.removeEventListener('mouseleave', startScroll);
      };
    }
  }, []);

  return (
    <section className="py-4 mt-28 sm:py-8 overflow-hidden ">
      <h2 className="text-xl sm:text-2xl font-bold text-center text-white mb-4 sm:mb-6">
        TRUSTED BY THE BEST BRANDS
      </h2>
      
      <div className="relative">
        <div 
          ref={scrollerRef}
          className="flex space-x-4 sm:space-x-8 md:space-x-16 animate-scroll"
        >
          {brandLogos.map((brand, index) => (
            <div key={index} className="flex-none w-24 sm:w-32 md:w-48">
              <Image 
                src={brand.src} 
                alt={brand.name} 
                width={192} 
                height={192} 
                className="w-full"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        @media (max-width: 768px) {
          .animate-scroll {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default TrustedBy;