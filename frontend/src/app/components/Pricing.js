import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Rocket, Briefcase, Star } from 'lucide-react';

export default function Pricing() {
    return (
        <>
            <Head>
                <link href="https://fonts.cdnfonts.com/css/brockmann" rel="stylesheet" />
            </Head>
            <div id="pricing" className="pricing-container">
                <h1 className="text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Our Packages</h1>
                <p className="text-xl mb-12 text-gray-300">Choose the package that best fits your needs and launch your digital presence into the future.</p>
                <div className="packages">
                    <div className="package left">
                        <div className="package-header">
                            <Rocket size={48} className="text-blue-400" />
                            <h2 className="font-semibold text-2xl mb-2 text-white">Starter</h2>
                            <h3 className="font-bold text-4xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">250 USD</h3>
                        </div>
                        <ul>
                            <li>Landing Page</li>
                            <li>Strategic brand identity</li>
                            <li>Templates & checklists</li>
                            <li>Training videos & post launch support</li>
                        </ul>
                        <Link href="/contact">
                            <button className="getStarted">Get Started</button>
                        </Link>
                    </div>
                    <div className="package featured">
                        <div className="most-common">Most Common</div>
                        <div className="package-header">
                            <Briefcase size={48} className="text-purple-400" />
                            <h2 className="font-semibold text-2xl mb-2 text-white">Business</h2>
                            <h3 className="font-bold text-4xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">750 USD</h3>
                        </div>
                        <ul>
                            <li>2-5 Page Website</li>
                            <li>Analytics</li>
                            <li>Insights Panel</li>
                            <li>Share Features</li>
                        </ul>
                        <Link href="/contact">
                            <button className="getStarted">Get Started</button>
                        </Link>
                    </div>
                    <div className="package right">
                        <div className="package-header">
                            <Star size={48} className="text-pink-400" />
                            <h2 className="font-semibold text-2xl mb-2 text-white">Premium</h2>
                            <h3 className="font-bold text-4xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-600">Contact Us</h3>
                        </div>
                        <ul>
                            <li>Full Stack Website</li>
                            <li>Content Pages</li>
                            <li>Full SEO</li>
                            <li>Share Features</li>
                        </ul>
                        <Link href="/contact">
                            <button className="getStarted">Get Started</button>
                        </Link>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .pricing-container {
                    text-align: center;
                    padding: 80px 40px;
                    font-family: 'Brockmann', sans-serif;
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    background: linear-gradient(to bottom, #15151e 0%, #15151e 10%, #1a202c 30%, #2d3748 100%);
                    position: relative;
                    overflow: hidden;
                }
                .pricing-container::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 200px;
                    background: linear-gradient(to bottom, #15151e, transparent);
                    z-index: 1;
                }
                .packages {
                    position: relative;
                    z-index: 2;
                    display: flex;
                    gap: 30px;
                    justify-content: center;
                    padding: 20px 0;
                    perspective: 1000px;
                }
                .package {
                    flex: 1;
                    max-width: 350px;
                    border-radius: 20px;
                    padding: 40px 30px;
                    background: rgba(255, 255, 255, 0.05);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
                    transform-style: preserve-3d;
                    position: relative;
                }
                .package.left:hover {
                    transform: rotateY(10deg) translateY(-20px);
                    box-shadow: 0 15px 30px rgba(0, 0, 255, 0.2);
                }
                .package.featured {
                    transform: scale(1.05);
                    background: rgba(255, 255, 255, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }
                .package.featured:hover {
                    transform: scale(1.1) translateZ(30px);
                    box-shadow: 0 20px 40px rgba(128, 0, 255, 0.3);
                }
                .package.right:hover {
                    transform: rotateY(-10deg) translateY(-20px);
                    box-shadow: 0 15px 30px rgba(255, 0, 255, 0.2);
                }
                .package-header {
                    margin-bottom: 30px;
                }
                .package ul {
                    list-style: none;
                    padding: 0;
                    text-align: left;
                    width: 100%;
                    color: #e0e0e0;
                }
                .package ul li {
                    margin: 15px 0;
                    display: flex;
                    align-items: center;
                }
                .package ul li::before {
                    content: "▹";
                    color: #64ffda;
                    margin-right: 10px;
                }
                .getStarted {
                    margin-top: 30px;
                    background: linear-gradient(45deg, #4a00e0, #8e2de2);
                    color: white;
                    padding: 12px 24px;
                    border: none;
                    border-radius: 50px;
                    cursor: pointer;
                    font-size: 1rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    transition: all 0.3s ease;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
                }
                .getStarted:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
                    background: linear-gradient(45deg, #8e2de2, #4a00e0);
                }
                .most-common {
                    position: absolute;
                    top: -15px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: linear-gradient(45deg, #00f260, #0575e6);
                    color: white;
                    padding: 5px 15px;
                    border-radius: 20px;
                    font-size: 0.9rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    box-shadow: 0 2px 10px rgba(0, 242, 96, 0.3);
                }
                @media (max-width: 1024px) {
                    .packages {
                        flex-direction: column;
                        align-items: center;
                    }
                    .package {
                        width: 100%;
                        max-width: 400px;
                        margin-bottom: 50px;
                    }
                    .package.featured {
                        transform: scale(1);
                    }
                    .package.featured:hover {
                        transform: scale(1.05) translateZ(30px);
                    }
                }
            `}</style>
        </>
    );
}