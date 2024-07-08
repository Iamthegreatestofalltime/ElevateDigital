"use client";

import { useEffect, useRef, useState } from 'react';
import styles from './SideScroll.module.css';
import Image from 'next/image';
import RealEstateDesign from '../../../public/RealEstateDesign.png';
import Construction from '../../../public/Construction.png';
import Kitchen from '../../../public/Kitchen.png';
import Food from '../../../public/Food.png';

export default function SideScroll() {
  const scrollRef = useRef(null);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollStart, setScrollStart] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setScrollStart(window.scrollY);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 } // Reduced threshold to detect earlier
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!isVisible) return;

      const currentScroll = window.scrollY;
      const scrollDelta = currentScroll - scrollStart;
      
      // Reduced threshold to start scrolling earlier
      const scrollThreshold = window.innerHeight * 0.5; // 50% of viewport height

      if (scrollDelta > 0 && scrollRef.current) {
        const translateX = (scrollDelta / (document.documentElement.scrollHeight - window.innerHeight)) * scrollRef.current.scrollWidth;
        scrollRef.current.style.transform = `translateX(-${translateX}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible, scrollStart]);

  return (
    <div className={styles.sideScrollContainer} ref={containerRef}>
      <div className={styles.sideScrollContent} ref={scrollRef}>
        <Image src={RealEstateDesign} alt="Image 1" className={styles.firstImage} width={400} height={400}/>
        <Image src={Construction} alt="Image 2" className={styles.scrollImage} width={400} height={400}/>
        <Image src={Kitchen} alt="Image 3" className={styles.scrollImage} width={400} height={400}/>
        <Image src={Food} alt="Image 4" className={styles.scrollImage} width={400} height={400}/>
        <Image src="https://assets-global.website-files.com/5837424ae11409586f837994/65de85206e70f69fe7d42321_Frame%202346.png" alt="Image 5" className={styles.scrollImage} width={400} height={400}/>
        {/* Add more images as needed */}
      </div>
    </div>
  );
}