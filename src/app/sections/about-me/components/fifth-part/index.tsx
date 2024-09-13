import { useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { CardProject } from "./components/card-project";

export function FourthText() {
  const fifthRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    gsap.to(fifthRef.current, {
      scrollTrigger: {
        trigger: fifthRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
      x: -200,
    })
  }, [fifthRef])

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <CardProject
        src=""
      />
      <CardProject
        src=""
      />
      <CardProject
        src=""
      />
    </div>
  )
}