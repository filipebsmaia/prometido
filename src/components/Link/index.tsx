import NextLink from 'next/link';

import React from 'react';

export type LinkProps = {
  href: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link = ({ children, href, ...rest }: LinkProps): JSX.Element => (
  <NextLink href={href}>
    <a {...rest}>{children}</a>
  </NextLink>
);
