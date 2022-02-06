import React from 'react';
import styles from './AppHeader.module.scss';
import { Link } from 'react-router-dom';
import { routes } from '../../../defs/Routes';
import { Logo } from '../../elements/logo/Logo';

export interface AppHeaderProps {}

export const AppHeader = React.memo<AppHeaderProps>((props) => {
  return (
    <Link to={routes.root.generate()} className={styles.image}>
      <Logo />
    </Link>
  );
});

AppHeader.displayName = 'AppHeader';
