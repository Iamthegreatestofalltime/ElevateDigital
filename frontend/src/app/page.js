// pages/index.js
import Image from 'next/image';
import Hero from './components/Hero';
import SideScroll from './components/SideScroll';
import InfoAbout from './components/InfoAbout';
import Testimonial from './components/Testimonial';
import BentoBox from './components/BentoBox';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import EmailCommunity from './components/EmailCommunity';
import LightBall from './components/LightBall';
import SubscribeThree from './components/SubscribeThree';
import LaptopSpline from './components/LaptopSpline';
import DELogo from '../../public/DELogo.png';
import FadeInUp from './components/FadeInUp';

export default function Main() {
  return (
    <div className="items-center justify-center min-h-screen bg-cover bg-white pb-24">
      <div className="w-full flex justify-center -mt-4 -mb-2">
        <Image src={DELogo} alt='logo' width={100} height={50} />
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="relative p-10 rounded-lg shadow-lg w-[85%] max-w-none min-h-[60vh] flex flex-col items-center justify-center" style={{ backgroundImage: 'url("https://assets-global.website-files.com/5837424ae11409586f837994/65da2485ff5fcdc97cd23ac3_dots.svg")', backgroundColor: '#f6f2ea'}}>
          <FadeInUp>
            <Hero />
          </FadeInUp>
          <FadeInUp>
            <SideScroll />
          </FadeInUp>
          <FadeInUp>
            <InfoAbout/>
          </FadeInUp>
          <FadeInUp>
            <Testimonial />
          </FadeInUp>
          <FadeInUp>
            <BentoBox />
          </FadeInUp>
          <FadeInUp>
            <Pricing />
          </FadeInUp>
          <FadeInUp>
            <FAQ/>
          </FadeInUp>
          <FadeInUp>
            <EmailCommunity />
          </FadeInUp>
        </div>
      </div>
    </div>
  );
}