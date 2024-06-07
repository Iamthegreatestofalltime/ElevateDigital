"use client";

import Head from 'next/head';
import Link from 'next/link';
import PlumberX from '../../../public/PlumberX.png';
import HandymanX from '../../../public/HandymanX.png';
import HandymanX2 from '../../../public/HandymanX2.png';
import Portfolio from '../../../public/Portfolio.png';
import WebDesign from '../../../public/WebDesign.png';
import NFT from '../../../public/NFT.png';
import Image from 'next/image';

export default function BentoBox() {
    return (
        <>
            <Head>
                <link href="https://fonts.cdnfonts.com/css/brockmann" rel="stylesheet" />
            </Head>
            <div className="bento-box-container">
                <h1 className="text-5xl mb-10 titleText">Apps, Websites and More</h1>
                <p className='-mt-6 mb-16'>You can see the websites in yellow in full by clicking on the image</p>
                <div className="grid-container">
                    <div className="grid-item1"><Image src={WebDesign} alt="Placeholder 5" /></div>
                    <Link href="https://alex-lotkov-portfolio.vercel.app/">
                        <div className="grid-item"><Image src={Portfolio} alt="Placeholder 4" /></div>
                    </Link>
                    <Link href="https://iamthegreatestofalltime.github.io/plumbingx.github.io/">
                        <div className="grid-item"><Image src={PlumberX} alt="Placeholder 1" /></div>
                    </Link>
                    <Link href="https://iamthegreatestofalltime.github.io/handyman1.github.io/">
                        <div className="grid-item"><Image src={HandymanX} alt="Placeholder 2" /></div>
                    </Link>
                    <Link href="https://iamthegreatestofalltime.github.io/handyman2.github.io/">
                        <div className="grid-item"><Image src={HandymanX2} alt="Placeholder 3" /></div>
                    </Link>
                    <div className="grid-item1"><Image src={NFT} alt="Placeholder 6" /></div>
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
                    .grid-item {
                        background-color: #FFF153;
                        margin-bottom: 10px;
                        padding: 10px;
                        border-radius: 10px;
                        overflow: hidden;
                        display: inline-block;
                        width: 100%;
                    }
                    .grid-item1 {
                        background-color: #F3EAD8;
                        margin-bottom: 10px;
                        padding: 10px;
                        border-radius: 10px;
                        overflow: hidden;
                        display: inline-block;
                        width: 100%;
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
                    }
                `}</style>
            </div>
        </>
    );
}