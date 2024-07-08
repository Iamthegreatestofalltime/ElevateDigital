import React, { useState } from 'react';
import Head from 'next/head';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "What services do you offer?",
            answer: "We offer a wide range of web design services including custom website development, e-commerce solutions, SEO optimization, and more."
        },
        {
            question: "How long does it take to build a website?",
            answer: "The timeline for building a website depends on the complexity and requirements. Typically, it can take anywhere from 2 to 6 weeks."
        },
        {
            question: "What is the cost of a new website?",
            answer: "The cost of a new website varies based on the project's scope and features. Our basic packages start at 250 USD."
        }
    ];

    return (
        <>
            <Head>
                <link href="https://fonts.cdnfonts.com/css/brockmann" rel="stylesheet" />
            </Head>
            <div className="faq-container">
                <h2 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                    Frequently Asked Questions
                </h2>
                {faqData.map((faq, index) => (
                    <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
                        <button
                            className="faq-question"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span>{faq.question}</span>
                            {openIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                        </button>
                        <div className="faq-answer">
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
            <style jsx>{`
                .faq-container {
                    font-family: 'Brockmann', sans-serif;
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 40px 20px;
                }
                .faq-item {
                    margin-bottom: 20px;
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 15px;
                    overflow: hidden;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                .faq-item:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
                }
                .faq-question {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                    padding: 20px;
                    background: none;
                    border: none;
                    text-align: left;
                    font-size: 1.2rem;
                    font-weight: 600;
                    color: #e0e0e0;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                .faq-question:hover {
                    color: #64ffda;
                }
                .faq-answer {
                    max-height: 0;
                    overflow: hidden;
                    transition: all 0.3s ease;
                }
                .faq-item.open .faq-answer {
                    max-height: 1000px;
                    padding: 0 20px 20px;
                }
                .faq-answer p {
                    color: #b0b0b0;
                    line-height: 1.6;
                }
                @media (max-width: 768px) {
                    .faq-question {
                        font-size: 1rem;
                    }
                    .faq-answer p {
                        font-size: 0.9rem;
                    }
                }
            `}</style>
        </>
    );
}