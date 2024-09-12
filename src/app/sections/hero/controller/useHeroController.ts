'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function useHeroController() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(heroRef.current, {
      scale: 3,
    }, {
      scale: 1,
      ease: 'expo.inOut',
      duration: .9,
      yoyo: true
    })
  }, [heroRef])

  return {
    heroRef,
  };
}