import { useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function ThirdText() {
  const thirdTextRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    gsap.to(thirdTextRef.current, {
      scrollTrigger: {
        trigger: thirdTextRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
      x: 200,
    })
  }, [thirdTextRef])

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <p ref={thirdTextRef} className="text-3xl max-w-[700px] mt-20">
        After this experience period, I was a full-stack developer at Luby Software.
      </p>
    </div>
  )
}