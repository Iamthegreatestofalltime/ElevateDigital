"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function EmailCommunity() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Simulate an API call
        setMessage('Thank you for subscribing!');
        setEmail('');
    };

    return (
        <div className="email-community-container">
            <div className="footer-section">
                <h2 className="section-title">Contact Me</h2>
                <p>Phone: 123-456-7890</p>
                <p>Email: myemail@gmail.com</p>
                <button className="footer-button">
                    <Link href="https://calendly.com/alexlotkov/discovery">
                        <span className="footer-button-text">Book a meeting through my Calendly</span>
                    </Link>
                </button>
            </div>
            <div className="footer-section">
                <h2 className="section-title">Follow Us</h2>
                <div className="social-icons">
                    <Link href="#" className="social-icon">
                        <Image src="https://clipart.info/images/ccovers/1590430652red-youtube-logo-png-xl.png" alt="Youtube" width={40} height={40} className='pt-1'/>
                    </Link>
                    <Link href="#" className="social-icon">
                        <Image src="https://clipart.info/images/ccovers/1516920567instagram-png-logo-transparent.png" alt="Instagram" width={40} height={40}/>
                    </Link>
                    <Link href="#" className="social-icon">
                        <Image src="https://purepng.com/public/uploads/medium/tik-tok-logo-lpi.png" alt="Tiktok" width={40} height={40}  className='-pt-8'/>
                    </Link>
                </div>
            </div>
            <div className="email-signup">
                <h2 className="text-3xl font-bold mb-6">Join Our Email Community</h2>
                <p className="text-lg mb-4">Stay updated with our latest news and offers.</p>
                <form onSubmit={handleSubmit} className="email-form">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="email-input"
                    />
                    <button type="submit" className="subscribe-button">Subscribe</button>
                </form>
                {message && <p className="message">{message}</p>}
            </div>
            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');
                .email-community-container {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    font-family: 'Montserrat', sans-serif;
                    padding: 40px;
                    background-color: #f3ead8;
                    max-width: 1200px;
                    margin: 0 auto;
                    border-radius: 20px;
                }
                .footer-section {
                    flex: 1;
                    min-width: 250px;
                    margin-right: 20px;
                    margin-bottom: 20px;
                }
                .section-title {
                    font-size: 1.5em;
                    color: black;
                    margin-bottom: 10px;
                }
                .footer-button {
                    background: black;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 1em;
                    transition: background-color 0.3s;
                    margin-top: 10px;
                }
                .footer-button-text {
                    display: block;
                }
                .footer-button:hover {
                    background-color: #F4CF86;
                }
                .social-icons {
                    display: flex;
                    gap: 10px;
                    justify-content: center;
                }
                .social-icon {
                    background: #ff3366;
                    color: white;
                    padding: 10px;
                    border-radius: 5px;
                    text-align: center;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .quick-links {
                    list-style: none;
                    padding: 0;
                }
                .quick-links li {
                    margin-bottom: 10px;
                }
                .quick-links a {
                    color: #000;
                    text-decoration: none;
                }
                .quick-links a:hover {
                    text-decoration: underline;
                }
                .email-signup {
                    flex: 1;
                    min-width: 250px;
                    text-align: left;
                    margin-left: 20px;
                }
                .email-form {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                }
                .email-input {
                    padding: 10px;
                    border: 1px solid #ddd;
                    border-radius: 5px;
                    font-size: 1em;
                    margin-bottom: 10px;
                    width: 100%;
                }
                .subscribe-button {
                    background: black;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 1em;
                    transition: background-color 0.3s;
                }
                .subscribe-button:hover {
                    background-color: #0056b3;
                }
                .message {
                    margin-top: 10px;
                    font-size: 1em;
                    color: #ff3366;
                }

                @media (max-width: 768px) {
                    .email-community-container {
                        flex-direction: column;
                        align-items: center;
                        padding: 20px; /* Adjust padding for better alignment */
                    }
                    .footer-section,
                    .email-signup {
                        margin-right: 0;
                        margin-left: 0;
                        text-align: center;
                        max-width: 100%; /* Ensure sections don't exceed container width */
                    }
                    .footer-button {
                        text-align: center;
                    }
                    .footer-button-text {
                        display: inline;
                    }
                    .social-icons {
                        justify-content: center;
                    }
                }
            `}</style>
        </div>
    );
}