"use client";

import { useState } from 'react';
import Head from 'next/head';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };

    return (
        <>
            <Head>
                <link href="https://fonts.cdnfonts.com/css/brockmann" rel="stylesheet" />
            </Head>
            <div className="faq-container">
                <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
                <div className="faq-item mb-1">
                    <button
                        className="faq-question text-xl font-semibold mb-2"
                        onClick={() => toggleFAQ(0)}
                    >
                        What services do you offer?
                    </button>
                    {openIndex === 0 && (
                        <p className="faq-answer mb-4">
                            We offer a wide range of web design services including custom website development, e-commerce solutions, SEO optimization, and more.
                        </p>
                    )}
                </div>
                <div className="faq-item mb-1">
                    <button
                        className="faq-question text-xl font-semibold mb-2"
                        onClick={() => toggleFAQ(1)}
                    >
                        How long does it take to build a website?
                    </button>
                    {openIndex === 1 && (
                        <p className="faq-answer mb-4">
                            The timeline for building a website depends on the complexity and requirements. Typically, it can take anywhere from 2 to 6 weeks.
                        </p>
                    )}
                </div>
                <div className="faq-item mb-1">
                    <button
                        className="faq-question text-xl font-semibold mb-2"
                        onClick={() => toggleFAQ(2)}
                    >
                        What is the cost of a new website?
                    </button>
                    {openIndex === 2 && (
                        <p className="faq-answer mb-4">
                            The cost of a new website varies based on the project's scope and features. Our basic packages start at 250 USD.
                        </p>
                    )}
                </div>
                <style jsx>{`
                    .faq-container {
                        font-family: 'Brockmann', sans-serif;
                        padding: 20px 40px; /* Adjusted padding for better spacing */
                        text-align: left;
                        max-width: 90%;
                        min-width: 90%;
                        margin: 0 auto;
                    }
                    .faq-item {
                        margin-bottom: 20px;
                        padding: 10px; /* Added padding for better spacing */
                        background-color: rgba(0, 0, 0, 0.05); /* Dark tint with 95% transparency */
                        border-radius: 10px;
                        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2); /* Shadow to the bottom and right */
                    }
                    .faq-question {
                        color: #333;
                        background: none;
                        border: none;
                        text-align: left;
                        width: 100%;
                        padding: 10px; /* Added padding for better spacing */
                        cursor: pointer;
                        transition: color 0.3s;
                    }
                    .faq-question:hover {
                        color: #F4CF86;
                    }
                    .faq-answer {
                        color: #555;
                        padding: 10px; /* Added padding for better spacing */
                    }
                    @media (max-width: 768px) {
                        .faq-container {
                            padding: 10px 20px; /* Adjusted padding for mobile */
                        }
                        .faq-question {
                            font-size: 1rem; /* Adjusted font size for mobile */
                        }
                        .faq-answer {
                            font-size: 0.875rem; /* Adjusted font size for mobile */
                        }
                    }
                `}</style>
            </div>
        </>
    );
}