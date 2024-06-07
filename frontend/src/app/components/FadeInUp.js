"use client"

// components/FadeInUp.js
import { useEffect, useRef, useState } from 'react';
import styles from './FadeInUp.module.css';

const FadeInUp = ({ children }) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className={`${styles.fadeInUp} ${isVisible ? styles.visible : ''}`}>
      {children}
    </div>
  );
};

export default FadeInUp;