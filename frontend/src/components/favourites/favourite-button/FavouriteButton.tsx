import React from 'react';
import { Favorite16, FavoriteFilled16 } from '@carbon/icons-react';
import styles from './FavouriteButton.module.scss';
import classNames from 'classnames';

export interface FavouriteButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export const FavouriteButton: React.FC<FavouriteButtonProps> =
  React.memo<FavouriteButtonProps>((props) => {
    const { active, ...rest } = props;
    return (
      <button {...rest} className={classNames(styles.root, props.className)}>
        {active ? (
          <FavoriteFilled16 color={styles.redColor} />
        ) : (
          <Favorite16 color={styles.redColor} />
        )}
      </button>
    );
  });

FavouriteButton.displayName = 'FavouriteButton';
