import Link, { LinkProps as NextLinkProps } from 'next/link';
import { LegacyRef, ReactNode } from 'react';

interface LinkProps extends NextLinkProps {
  children: ReactNode
  ref?: LegacyRef<HTMLAnchorElement> | undefined
};

export function NavLink({ children, ref, ...rest }: LinkProps) {
  return (
    <Link
      {...rest}
      ref={ref}
    >
      {children}
    </Link>
  )
}