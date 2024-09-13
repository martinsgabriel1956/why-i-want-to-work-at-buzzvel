'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { FirstText, FourthText, SecondText, ThirdText } from './components';

gsap.registerPlugin(ScrollTrigger);

export function AboutMeSection() {
  // const aboutMeSectionRef = useRef<HTMLElement>(null);


  // useGSAP(() => {
  //   gsap.to(aboutMeSectionRef.current, {
  //     scrollTrigger: {
  //       trigger: aboutMeSectionRef.current,
  //       scrub: true,
  //     },
  //     opacity: 1
  //   })
  // }, [aboutMeSectionRef])

  return (
    <section id="about-me" className="w-full h-screen">
      <div className="">
        <h2 className='text-3xl'>About Me</h2>

        <FirstText />
        <SecondText />
        <ThirdText />
        <FourthText />
      </div>
    </section>
  )
}