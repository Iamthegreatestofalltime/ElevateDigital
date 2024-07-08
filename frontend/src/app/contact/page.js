"use client"

import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import CalendlyInline from '../components/CalendlyInline';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function ContactPage() {
    return (
        <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen">
            <Header />
            <div className="contact-page">
                <div className="header mt-32">
                    <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                        Have an app idea?<br />Let's launch it.
                    </h1>
                    <p className="text-xl text-gray-300">The first step to developing your software product idea starts with a 30 minute call. It's that easy.</p>
                </div>

                <div className="calendly-section">
                    <CalendlyInline />
                </div>

                <div className="contact-section">
                    <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Contact us</h2>
                    <p className="text-gray-300 mb-8">Let's get your product designed, built, and scaled how you want it. Tell us more about your project and we'll kick off in no time.</p>

                    <div className="contact-form-container">
                        <form className="contact-form">
                            <input type="text" placeholder="Name" className="bg-gray-800 text-white" />
                            <input type="email" placeholder="Email" className="bg-gray-800 text-white" />
                            <textarea placeholder="About your project" className="bg-gray-800 text-white"></textarea>
                            <button type="submit" className="submit-btn">Send message</button>
                        </form>

                        <div className="contact-info">
                            <div className="info-item">
                                <Mail size={24} className="text-blue-400" />
                                <span>alexlotkov124@gmail.com</span>
                            </div>
                            <div className="info-item">
                                <MapPin size={24} className="text-purple-400" />
                                <span>Greater Indy, Indiana</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cta-section">
                    <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Looking to build your app?</h2>
                    <p className="text-gray-300 mb-8">Schedule a free call, so we can learn more about your next project.</p>
                    <Link href="https://calendly.com/alexlotkov/discovery">
                        <button className="cta-button">Book A Call →</button>
                    </Link>
                </div>

                <style jsx>{`
                    .contact-page {
                        color: #ffffff;
                        font-family: 'Arial', sans-serif;
                        padding: 40px 20px;
                        max-width: 1200px;
                        margin: 0 auto;
                    }
                    .header {
                        text-align: center;
                        margin-bottom: 60px;
                    }
                    .calendly-section {
                        background: rgba(255, 255, 255, 0.05);
                        backdrop-filter: blur(10px);
                        border-radius: 20px;
                        padding: 40px;
                        margin-bottom: 60px;
                        box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
                        border: 1px solid rgba(255, 255, 255, 0.18);
                    }
                    .contact-section {
                        margin-bottom: 60px;
                    }
                    .contact-form-container {
                        display: flex;
                        gap: 40px;
                    }
                    .contact-form {
                        flex: 2;
                        display: flex;
                        flex-direction: column;
                        gap: 20px;
                    }
                    .contact-form input,
                    .contact-form textarea {
                        background-color: rgba(255, 255, 255, 0.05);
                        border: 1px solid rgba(255, 255, 255, 0.1);
                        border-radius: 10px;
                        padding: 15px;
                        color: #ffffff;
                        transition: all 0.3s ease;
                    }
                    .contact-form input:focus,
                    .contact-form textarea:focus {
                        background-color: rgba(255, 255, 255, 0.1);
                        border-color: rgba(255, 255, 255, 0.3);
                        box-shadow: 0 0 15px rgba(100, 255, 218, 0.1);
                    }
                    .contact-form textarea {
                        height: 150px;
                    }
                    .submit-btn {
                        background: linear-gradient(45deg, #4a00e0, #8e2de2);
                        color: #ffffff;
                        border: none;
                        border-radius: 25px;
                        padding: 12px 30px;
                        cursor: pointer;
                        align-self: flex-start;
                        transition: all 0.3s ease;
                        font-weight: bold;
                    }
                    .submit-btn:hover {
                        transform: translateY(-3px);
                        box-shadow: 0 10px 20px rgba(138, 45, 226, 0.3);
                    }
                    .contact-info {
                        flex: 1;
                    }
                    .info-item {
                        display: flex;
                        align-items: center;
                        gap: 15px;
                        margin-bottom: 25px;
                        font-size: 1.1rem;
                    }
                    .cta-section {
                        text-align: center;
                        background: rgba(255, 255, 255, 0.05);
                        backdrop-filter: blur(10px);
                        border-radius: 20px;
                        padding: 60px 40px;
                        box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
                        border: 1px solid rgba(255, 255, 255, 0.18);
                    }
                    .cta-button {
                        background: linear-gradient(45deg, #4a00e0, #8e2de2);
                        color: #ffffff;
                        border: none;
                        border-radius: 25px;
                        padding: 15px 40px;
                        font-size: 1.2rem;
                        cursor: pointer;
                        margin-top: 20px;
                        transition: all 0.3s ease;
                        font-weight: bold;
                    }
                    .cta-button:hover {
                        transform: translateY(-3px);
                        box-shadow: 0 10px 20px rgba(138, 45, 226, 0.3);
                    }
                    @media (max-width: 768px) {
                        .contact-form-container {
                            flex-direction: column;
                        }
                    }
                `}</style>
            </div>
            <Footer />
        </div>
    );
}