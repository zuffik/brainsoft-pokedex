import React from 'react';
import image from './Logo.png';

export interface LogoProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {}

export const Logo = React.memo<LogoProps>((props) => {
  return <img alt="pokedex" {...props} src={image} />;
});

Logo.displayName = 'Logo';
