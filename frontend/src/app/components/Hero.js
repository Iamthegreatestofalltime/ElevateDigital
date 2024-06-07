// components/Hero.js
"use client";
import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';
import LaptopSpline from './LaptopSpline';

const Hero = () => (
  <div id="hero" className={styles.hero}>
    <div className={styles.container}>
      <div className={styles.heroWrapper}>
        <div className={styles.textSection}>
          <h1 className={styles.heading}>We Create Practical Websites For Home Contractors</h1>
          <p className={styles.inlineText}>
            Design subscriptions for everyone.
          </p>
          <div className={styles.buttonWrapper}>
            <Link href="#plans">
              <div className={styles.button}>See plans</div>
            </Link>
          </div>
        </div>
        <div className={`${styles.splineSection} ${styles.desktopSpline}`}>
          <LaptopSpline />
        </div>
      </div>
    </div>
  </div>
);

export default Hero;