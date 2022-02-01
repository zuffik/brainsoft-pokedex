import React from 'react';
import Image, { ImageProps } from 'next/image';
import image from './Logo.png';

export interface LogoProps extends Omit<ImageProps, 'src'> {}

export const Logo = React.memo<LogoProps>((props) => {
  return <Image {...props} src={image} />;
});

Logo.displayName = 'Logo';
