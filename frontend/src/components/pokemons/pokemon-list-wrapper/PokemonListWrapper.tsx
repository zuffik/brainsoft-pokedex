import React from 'react';
import classNames from 'classnames';
import styles from './PokemonListWrapper.module.scss';
import { PokemonListViewType } from '../../../graphql';
import { PokemonListItemProps } from '../pokemon-list-item/PokemonListItem';

export interface PokemonListWrapperProps {
  layout?: PokemonListItemProps['layout'];
}

export const PokemonListWrapper: React.FC<PokemonListWrapperProps> =
  React.memo<PokemonListWrapperProps>((props) => {
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

PokemonListWrapper.displayName = 'PokemonListWrapper';
