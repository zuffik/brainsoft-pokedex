import React from 'react';
import classNames from 'classnames';
import { PokemonListViewType } from '../../../graphql';
import styles from './PokemonListItemWrapper.module.scss';

export interface PokemonListItemWrapperProps {
  layout?: PokemonListViewType;
}

export const PokemonListItemWrapper: React.FC<PokemonListItemWrapperProps> =
  React.memo<PokemonListItemWrapperProps>((props) => {
    return (
      <div
        className={classNames(styles.root, {
          [styles.list]: props.layout === PokemonListViewType.List,
          [styles.grid]: props.layout === PokemonListViewType.Grid,
        })}
      >
        {props.children}
      </div>
    );
  });

PokemonListItemWrapper.displayName = 'PokemonListItemWrapper';
