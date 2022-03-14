import NextImage, { ImageProps as NextImageProps } from 'next/image';

import React from 'react';

import { Container } from './styles';

type ImageProps = NextImageProps & {
  id?: string;
  className?: string;
  alt: string;
};

export const Image = (props: ImageProps): JSX.Element => {
  const { width, height, id, className } = props;
  return (
    <Container
      width={width}
      height={height}
      className={className}
      id={id}
    >
      <NextImage
        {...props}
      />
    </Container>
  );
};

export default Image;
