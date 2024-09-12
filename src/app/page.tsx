import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { HeroSection } from "./sections/hero";

gsap.registerPlugin(useGSAP);

export default function Home() {
  return (
    <main>
      <HeroSection />
    </main>
  );
}
