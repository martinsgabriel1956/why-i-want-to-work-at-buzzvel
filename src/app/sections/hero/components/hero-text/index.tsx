'use client';

import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from 'gsap/all';

gsap.registerPlugin(TextPlugin);

export function HeroText() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const describeRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    gsap.to(titleRef.current,
      {
        text: "Hi, Gabriel Martins",
        duration: 3,
        opacity: 1
      })
  }, [titleRef])

  useGSAP(() => {
    gsap.to(labelRef.current, {
      text: "FullStack Developer",
      duration: 2,
      opacity: 1
    })
  }, [labelRef])

  useGSAP(() => {
    gsap.to(describeRef.current, {
      duration: 1,
      text: "I'm working as a FullStack Developer since 2021, and I'm always looking to improve my skills.",
    })
  }, [describeRef])

  return (
    <div className="flex flex-col items-center lg:items-start">
      <h2
        ref={titleRef}
        className="text-3xl uppercase text-white font-semibold"
      >
        Hi
      </h2>
      <span
        ref={labelRef}
        className="text-2xl text-slate-500"
      >
        Full
      </span>
      <p
        ref={describeRef}
        className="max-w-96 text-slate-600 text-lg"
      >
        I
      </p>
    </div>
  )
}