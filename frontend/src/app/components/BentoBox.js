"use client";

import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import PlumberX from '../../../public/PlumberX.png';
import HandymanX from '../../../public/HandymanX.png';
import HandymanX2 from '../../../public/HandymanX2.png';
import Portfolio from '../../../public/Portfolio.png';
import WebDesign from '../../../public/WebDesign.png';
import NFT from '../../../public/NFT.png';

export default function BentoBox() {
    const [isVisible, setIsVisible] = useState(false);
    const [animateLeft, setAnimateLeft] = useState(false);
    const [animateMiddle, setAnimateMiddle] = useState(false);
    const [animateRight, setAnimateRight] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 } // Trigger when 10% of the component is visible
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
        if (isVisible) {
            const timer1 = setTimeout(() => setAnimateLeft(true), 100);
            const timer2 = setTimeout(() => setAnimateMiddle(true), 600);
            const timer3 = setTimeout(() => setAnimateRight(true), 1100);

            return () => {
                clearTimeout(timer1);
                clearTimeout(timer2);
                clearTimeout(timer3);
            };
        }
    }, [isVisible]);

    return (
        <>
            <Head>
                <link href="https://fonts.cdnfonts.com/css/brockmann" rel="stylesheet" />
            </Head>
            <div id="portfolio" ref={containerRef} className="bento-box-container">
                <h1 className="text-5xl mb-10 titleText">Apps, Websites and More</h1>
                <p className='-mt-6 mb-16 text-gray-300'>see some of our work!</p>
                <div className="grid-container">
                    <div className={`grid-item1 bg-gray-800 ${animateLeft ? 'animate-left' : ''}`}>
                        <Image src={WebDesign} alt="Placeholder 5" />
                    </div>
                    <Link href="https://alex-lotkov-portfolio.vercel.app/">
                        <div className={`grid-item bg-gray-800 ${animateMiddle ? 'animate-middle' : ''}`}>
                            <Image src={Portfolio} alt="Placeholder 4" />
                        </div>
                    </Link>
                    <Link href="https://iamthegreatestofalltime.github.io/plumbingx.github.io/">
                        <div className={`grid-item bg-gray-800 ${animateRight ? 'animate-right' : ''}`}>
                            <Image src={PlumberX} alt="Placeholder 1" />
                        </div>
                    </Link>
                    <Link href="https://iamthegreatestofalltime.github.io/handyman1.github.io/">
                        <div className={`grid-item bg-gray-800 ${animateLeft ? 'animate-left' : ''}`}>
                            <Image src={HandymanX} alt="Placeholder 2" />
                        </div>
                    </Link>
                    <Link href="https://iamthegreatestofalltime.github.io/handyman2.github.io/">
                        <div className={`grid-item bg-gray-800 ${animateMiddle ? 'animate-middle' : ''}`}>
                            <Image src={HandymanX2} alt="Placeholder 3" />
                        </div>
                    </Link>
                    <div className={`grid-item1 bg-gray-800 ${animateRight ? 'animate-right' : ''}`}>
                        <Image src={NFT} alt="Placeholder 6" />
                    </div>
                </div>
                <style jsx>{`
                    .bento-box-container {
                        font-family: 'Brockmann', sans-serif;
                        text-align: center;
                        padding: 20px;
                    }
                    .grid-container {
                        column-count: 3;
                        column-gap: 10px;
                    }
                    .grid-item, .grid-item1 {
                        margin-bottom: 10px;
                        padding: 10px;
                        border-radius: 10px;
                        overflow: hidden;
                        display: inline-block;
                        width: 100%;
                        opacity: 0;
                        transform: translateY(50px);
                        transition: opacity 0.5s ease, transform 0.5s ease;
                    }
                    .grid-item img {
                        width: 100%;
                        height: auto;
                        border-radius: 10px;
                    }
                    @media (max-width: 768px) {
                        .grid-container {
                            column-count: 1;
                        }
                    }
                    .titleText {
                        font-weight: 600;
                        color: white;
                    }
                    .animate-left {
                        opacity: 1;
                        transform: translateY(0);
                    }
                    .animate-middle {
                        opacity: 1;
                        transform: translateY(0);
                    }
                    .animate-right {
                        opacity: 1;
                        transform: translateY(0);
                    }
                `}</style>
            </div>
        </>
    );
}