import { useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function SecondText() {
  const secondTextRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    gsap.to(secondTextRef.current, {
      scrollTrigger: {
        trigger: secondTextRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
      x: -100,
    })
  }, [secondTextRef])

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <p ref={secondTextRef} className="text-3xl max-w-[700px]">
        After course, I started to work in 2021 in a company called Luby Software. I initialized my carrer as Trainee during six months.
      </p>
    </div>
  )
}