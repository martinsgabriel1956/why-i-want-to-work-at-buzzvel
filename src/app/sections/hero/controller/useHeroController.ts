'use client';

import { useWindowResize } from "../../../../hooks/useWindowResize";

export function useHeroController() {
  const [width, height] = useWindowResize();

  return {
    width,
    height
  };
}