import NextLink from 'next/link';

import React from 'react';

export type LinkProps = {
  href: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link: React.FC<LinkProps> = ({ children, href, ...rest }) => (
  <NextLink href={href}>
    <a {...rest}>{children}</a>
  </NextLink>
);
