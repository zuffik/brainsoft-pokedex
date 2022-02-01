import React from 'react';
import styles from './AppHeader.module.scss';
import { Logo } from '../../elements/logo/Logo';

export interface AppHeaderProps {}

export const AppHeader = React.memo<AppHeaderProps>((props) => {
  return (
    <div className={styles.image}>
      <Logo />
    </div>
  );
});

AppHeader.displayName = 'AppHeader';
