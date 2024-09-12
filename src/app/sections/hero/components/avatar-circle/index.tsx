'use client';

import { useRef } from 'react';
import Image from "next/image";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function AvatarCircle() {
  const avatarCircleRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(avatarCircleRef.current, {
      rotateY: 0,
      ease: 'circ',
      duration: 5,
      repeat: -1,
      animationDirection: 'alternate',
    }, {
      rotateY: 360,
      duration: 5,
      animationDirection: 'alternate',
      repeat: -1,
      ease: 'circ',
    })
  }, [avatarCircleRef])

  return (
    <div className="" ref={avatarCircleRef}>
      <Image
        src="https://github.com/martinsgabriel1956.png"
        alt="Gabriel Martins Profile"
        width={200}
        height={200}

        className="rounded-full border-8 border-slate-800 cursor-pointer"
      />
    </div>
  )
}