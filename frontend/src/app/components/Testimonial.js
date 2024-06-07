"use client";

import Image from 'next/image';
import Head from 'next/head'; // Import Head from next/head to include the font link

export default function Testimonial() {
    return (
        <>
            <Head>
                <link href="https://fonts.cdnfonts.com/css/brockmann" rel="stylesheet" />
            </Head>
            <div className="testimonial-container mb-48">
                <h1 className="mt-16 text-5xl font-bold text-center">What People Have To Say About Us</h1>
                <div className="quote-image-container mt-6 flex justify-center">
                    <Image src="http://cdn.onlinewebfonts.com/svg/img_532719.png" alt="Quotes Image" width={50} height={50} />
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center flex-wrap gap-8 mt-8 w-full px-4">
                    <div className="p-2 testimonial max-w-[120vh] sm:w-[40vh] md:w-[60vh]">
                        <p>Working with Alex was a fantastic experience. He developed a custom AI Task Manager App for our team, which has dramatically improved our productivity. Alex&apos;s attention to detail and ability to deliver exactly what we needed were exceptional.</p>
                    </div>
                </div>
                <style jsx>{`
                    .testimonial-container {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        margin-bottom: 55px;
                        font-family: 'Brockmann', sans-serif; /* Apply the font here */
                    }
                    .quote-image-container {
                        margin-bottom: -0px;
                    }
                    .testimonial {
                        background-color: rgba(0, 0, 0, 0.05); /* Dark tint with 95% transparency */
                        border-radius: 10px;
                        border-width: 1px;
                        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2); /* Shadow to the bottom and right */
                        text-align: center;
                        font-family: 'Brockmann', sans-serif; /* Apply the font here */
                    }
                `}</style>
            </div>
        </>
    );
}