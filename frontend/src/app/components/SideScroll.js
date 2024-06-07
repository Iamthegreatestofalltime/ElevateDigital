"use client";
import { useEffect, useRef } from 'react';
import styles from './SideScroll.module.css';
import Image from 'next/image';
import RealEstateDesign from '../../../public/RealEstateDesign.png';
import Construction from '../../../public/Construction.png';
import Kitchen from '../../../public/Kitchen.png';
import Food from '../../../public/Food.png';

export default function SideScroll() {
  const scrollRef = useRef(null);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          if (scrollRef.current) {
            const scrollY = window.scrollY;
            scrollRef.current.style.transform = `translateX(-${scrollY}px)`;
          }
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.sideScrollContainer}>
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