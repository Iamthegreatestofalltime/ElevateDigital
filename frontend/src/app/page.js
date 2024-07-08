"use client"

import Hero from './components/Hero';
import SideScroll from './components/SideScroll';
import InfoAbout from './components/InfoAbout';
import BentoBox from './components/BentoBox';
import Pricing from './components/Pricing';
import Header from './components/Header';
import TrustedBy from './components/TrustedBy';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function Main() {
  return (
    <div className="relative min-h-screen bg-cover" style={{backgroundColor: '#15151e'}}>
      <Header />
      <main className="pt-[var(--header-height,5rem)]">
        <Hero />
        <div className="mt-8 sm:mt-12">
          <TrustedBy />
        </div>
        <div className="mt-8 sm:mt-12">
          <SideScroll/>
        </div>
        <div className="mt-8 sm:mt-12">
          <InfoAbout/>
        </div>
        <div className="mt-8 sm:mt-12">
          <BentoBox/>
        </div>
        <div className="mt-8 sm:mt-12">
          <Pricing/>
        </div>
        <div className="mt-8 sm:mt-12">
          <FAQ/>
        </div>
        <div className="mt-8 sm:mt-12">
          <Footer/>
        </div>
      </main>
    </div>
  );
}