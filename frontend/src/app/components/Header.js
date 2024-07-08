"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import styles from './Header.module.css';
import '../globals.css'
import DELogo from '../../../public/DELogo.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      
      if (currentScrollPos > prevScrollPos) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      if (pathname !== '/') {
        window.location.href = '/' + href;
      } else {
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = href;
    }
    setIsOpen(false);
  };

  return (
    <div className={`${styles.header} ${scrollDirection === "down" ? styles.headerHidden : ''}`}>
      <Link href='/' className={styles.logo}>
        <Image src={DELogo} width={40} height={40} alt="DE Logo"/>
      </Link>
      <div className={`${styles.burger} ${isOpen ? styles.open : ''}`} onClick={toggleMenu}>
        <div className={styles.burgerLine}></div>
        <div className={styles.burgerLine}></div>
      </div>
      <nav className={`${styles.nav} ${isOpen ? styles.show : ''}`}>
        <a href="#portfolio" onClick={(e) => handleNavClick(e, '#portfolio')} className={styles.navButton}>Portfolio</a>
        <a href="#pricing" onClick={(e) => handleNavClick(e, '#pricing')} className={styles.navButton}>Pricing</a>
        <a href="/blog" onClick={(e) => handleNavClick(e, '/blog')} className={styles.navButton}>Blogs</a>
        <a href="/contact" onClick={(e) => handleNavClick(e, '/contact')} className={styles.navButton}>Contact</a>
        <a href="/contact" onClick={(e) => handleNavClick(e, '/contact')} className={styles.getStarted}>Get Started</a>
      </nav>
    </div>
  );
}