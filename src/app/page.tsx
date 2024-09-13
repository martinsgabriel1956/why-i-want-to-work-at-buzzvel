import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { HeroSection } from "./sections/hero";
import { AboutMeSection } from './sections/about-me';
import { Header } from '@/components/header';

gsap.registerPlugin(useGSAP);


export default function Home() {
  return (
    <main className='max-w-[1440px] mx-auto w-full'>
      <Header />
      <HeroSection />
      <AboutMeSection />
    </main>
  );
}
