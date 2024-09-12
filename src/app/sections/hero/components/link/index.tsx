import Link, { LinkProps as NextLinkProps } from 'next/link';
import { ReactNode } from 'react';

interface LinkProps extends NextLinkProps {
  children: ReactNode
};

export function NavLink({ children, ...rest }: LinkProps) {
  return (
    <Link
      {...rest}
    >
      {children}
    </Link>
  )
}