"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const BenefitsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">Your integrated product team</h2>
        <p className="text-gray-400 mb-12">Software is always changing. That&apos;s why we do things different.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <BenefitCard
            title="From idea to product 10X faster"
            description="With the power of AI and rapid sprint cycles."
            image="https://cdn.prod.website-files.com/63c26552be9ea599a179aeed/6580e889743df4400db7e45a_screen.png"
            isVisible={isVisible}
            direction="left"
          />
          <BenefitCard
            title="Unlimited requests & revisions"
            description="We don't limit your ability to create the best product possible."
            image="https://cdn.prod.website-files.com/63c26552be9ea599a179aeed/657f4d3fd33075f56164bc0d_notion-cards.png"
            isVisible={isVisible}
            direction="right"
          />
          <BenefitCard
            title="Streamlined tooling"
            description="Our asynchronous way of working faster."
            image="https://cdn.prod.website-files.com/63c26552be9ea599a179aeed/6585e7b0a25cc4e695a210af_mobile_tools.png"
            isVisible={isVisible}
            direction="left"
          />
          <BenefitCard
            title="Your Dedicated Team"
            description="We work with you, not against you."
            image="https://cdn.prod.website-files.com/63c26552be9ea599a179aeed/6585e8adee6e6704282efc8c_Mobile_Team.png"
            isVisible={isVisible}
            direction="right"
          />
        </div>
      </div>
    </section>
  );
};

const BenefitCard = ({ title, description, image, isVisible, direction }) => {
  const animationClass = isVisible
    ? 'opacity-100 translate-x-0'
    : direction === 'left'
    ? 'opacity-0 -translate-x-full'
    : 'opacity-0 translate-x-full';

  return (
    <div className={`bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-1000 ease-out ${animationClass}`}>
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
      </div>
    </div>
  );
};

export default BenefitsSection;