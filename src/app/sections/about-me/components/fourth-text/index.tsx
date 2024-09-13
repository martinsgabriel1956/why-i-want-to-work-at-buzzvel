import { useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function FourthText() {
  const fourthTextRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    gsap.to(fourthTextRef.current, {
      scrollTrigger: {
        trigger: fourthTextRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
      x: -200,
    })
  }, [fourthTextRef])

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <p ref={fourthTextRef} className="text-3xl max-w-[700px] mt-20">
        In this period, I worked on three projects.
      </p>
    </div>
  )
}