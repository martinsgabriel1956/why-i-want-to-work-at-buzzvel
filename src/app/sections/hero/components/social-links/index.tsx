'use client';
import Link from "next/link";
import { ReactNode } from "react";

interface SocialLinksProps {
  href: string;
  children: ReactNode;
}

export function SocialLink({ children, href }: SocialLinksProps) {
  return (
    <Link target="_blank" href={href}>
      {children}
    </Link>
  )
}