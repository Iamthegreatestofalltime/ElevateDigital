"use client";

import Head from 'next/head';

export default function Pricing() {
    return (
        <>
            <Head>
                <link href="https://fonts.cdnfonts.com/css/brockmann" rel="stylesheet" />
            </Head>
            <div id="plans" className="pricing-container">
                <h1 className="text-5xl font-bold mb-6">Our Packages</h1>
                <p className="text-lg mb-10">Choose the package that best fits your needs and get started with our expert web design services.</p>
                <div className="packages">
                    <div className="package">
                        <h2 className="font-semibold text-xl mb-2">Starter</h2>
                        <h3 className="font-bold text-3xl mb-4">250 USD</h3>
                        <ul>
                            <li>Landing Page</li>
                            <li>Strategic brand identity</li>
                            <li>Templates & checklists</li>
                            <li>Training videos & post launch support</li>
                        </ul>
                        <button className="button">Get Started</button>
                        <a href="#">Learn more</a>
                    </div>
                    <div className="package">
                        <h2 className="font-semibold text-xl mb-2">Business</h2>
                        <h3 className="font-bold text-3xl mb-4">750 USD</h3>
                        <ul>
                            <li>2-5 Page Website</li>
                            <li>Analytics</li>
                            <li>Insights Panel</li>
                            <li>Share Features</li>
                        </ul>
                        <button className="button">Get Started</button>
                        <a href="#">Learn more</a>
                    </div>
                    <div className="package">
                        <h2 className="font-semibold text-xl mb-2">Premium</h2>
                        <h3 className="font-bold text-3xl mb-4">1000 USD</h3>
                        <ul>
                            <li>Full Stack Website</li>
                            <li>Content Pages</li>
                            <li>Full SEO</li>
                            <li>Share Features</li>
                        </ul>
                        <button className="button">Get Started</button>
                        <a href="#">Learn more</a>
                    </div>
                </div>
                <style jsx>{`
                    .pricing-container {
                        text-align: center;
                        padding: 40px;
                        font-family: 'Brockmann', sans-serif;
                    }
                    .packages {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        gap: 20px;
                        justify-content: center;
                        padding: 20px 0;
                    }
                    .package {
                        background: #F3EAD8;
                        border-radius: 10px;
                        padding: 20px;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        transition: transform 0.3s, box-shadow 0.3s;
                    }
                    .package:hover {
                        transform: translateY(-10px);
                        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
                    }
                    .package h2 {
                        font-size: 1.5em;
                        color: #333;
                    }
                    .package h3 {
                        font-size: 2.5em;
                        margin: 10px 0;
                        color: #000;
                    }
                    .package ul {
                        list-style: none;
                        padding: 0;
                        text-align: left;
                        width: 100%;
                        color: #555;
                    }
                    .package ul li {
                        margin: 10px 0;
                        display: flex;
                        align-items: center;
                    }
                    .button {
                        background: black;
                        color: white;
                        border: none;
                        padding: 10px 20px;
                        border-radius: 5px;
                        cursor: pointer;
                        font-size: 1em;
                        margin-top: auto;
                        transition: background-color 0.3s;
                    }
                    .button:hover {
                        background-color: #F4CF86;
                    }
                    .package a {
                        display: block;
                        margin-top: 10px;
                        color: black;
                        text-decoration: none;
                    }
                    .package a:hover {
                        text-decoration: underline;
                    }
                    @media (max-width: 900px) {
                        .packages {
                            grid-template-columns: 1fr;
                        }
                        .package{
                            background: #F3EAD8;
                            border-radius: 10px;
                            padding: 10px;
                            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            transition: transform 0.3s, box-shadow 0.3s;
                            min-width: 80%;
                        }
                    }
                `}</style>
            </div>
        </>
    );
}