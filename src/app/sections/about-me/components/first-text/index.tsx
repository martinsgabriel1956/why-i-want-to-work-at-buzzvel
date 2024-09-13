import { useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function FirstText() {
  const firstTextRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    gsap.to(firstTextRef.current, {
      scrollTrigger: {
        trigger: firstTextRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
      x: 100,
    })
  }, [firstTextRef])

  return (
    <div className="w-full h-screen flex items-center">
      <p ref={firstTextRef} className="text-3xl max-w-[700px]">
        This journey started in 2019, when I was learning in tech course about Web Programmer by Senac RJ and after that I promise to myself that I&apos;ll need to work in this area.
      </p>
    </div>
  )
}