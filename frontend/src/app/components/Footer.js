"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    const pathname = usePathname();

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
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3 className="footer-title">Navigate</h3>
                    <div className='footer-nav'>
                        <a href="/" onClick={(e) => handleNavClick(e, '/')} className="footer-link">Home</a>
                        <a href="#portfolio" onClick={(e) => handleNavClick(e, '#portfolio')} className="footer-link">Portfolio</a>
                        <a href="#pricing" onClick={(e) => handleNavClick(e, '#pricing')} className="footer-link">Pricing</a>
                        <a href="/contact" onClick={(e) => handleNavClick(e, '/contact')} className="footer-link">Contact</a>
                        <a href="/blog" onClick={(e) => handleNavClick(e, '/blog')} className="footer-link">Blog</a>
                    </div>
                </div>
                <div className="footer-section">
                    <h3 className="footer-title">Connect</h3>
                    <div className="social-icons">
                        <a href="#" className="social-icon"><Facebook size={20} /></a>
                        <a href="#" className="social-icon"><Twitter size={20} /></a>
                        <a href="#" className="social-icon"><Instagram size={20} /></a>
                        <a href="#" className="social-icon"><Linkedin size={20} /></a>
                    </div>
                </div>
                <div className="footer-section">
                    <h3 className="footer-title">Contact Us</h3>
                    <p className="contact-info"><Mail size={16} /> alexlotkov124@gmail.com</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Elevate Digital. All rights reserved.</p>
            </div>

            <style jsx>{`
                .footer {
                    background: linear-gradient(to right, rgba(21, 21, 30, 0.95), rgba(41, 41, 61, 0.95));
                    color: #e0e0e0;
                    padding: 40px 20px 20px;
                    font-family: 'Brockmann', sans-serif;
                    position: relative;
                    overflow: hidden;
                }
                .footer::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 2px;
                    background: linear-gradient(to right, #4a00e0, #8e2de2);
                }
                .footer-content {
                    display: flex;
                    justify-content: space-around;
                    flex-wrap: wrap;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .footer-section {
                    margin-bottom: 20px;
                }
                .footer-title {
                    font-size: 1.2rem;
                    font-weight: 600;
                    margin-bottom: 15px;
                    color: #64ffda;
                }
                .footer-nav {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                }
                .footer-link {
                    color: #b0b0b0;
                    margin-bottom: 10px;
                    transition: color 0.3s ease, transform 0.3s ease;
                    cursor: pointer;
                }
                .footer-link:hover {
                    color: #64ffda;
                    transform: translateX(5px);
                }
                .social-icons {
                    display: flex;
                    gap: 15px;
                }
                .social-icon {
                    color: #b0b0b0;
                    transition: color 0.3s ease, transform 0.3s ease;
                }
                .social-icon:hover {
                    color: #64ffda;
                    transform: translateY(-3px);
                }
                .contact-info {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 10px;
                }
                .footer-bottom {
                    text-align: center;
                    margin-top: 40px;
                    padding-top: 20px;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                }
                @media (max-width: 768px) {
                    .footer-content {
                        flex-direction: column;
                        align-items: center;
                    }
                    .footer-section {
                        text-align: center;
                        margin-bottom: 30px;
                    }
                    .footer-nav {
                        align-items: center;
                    }
                }
            `}</style>
        </footer>
    );
}