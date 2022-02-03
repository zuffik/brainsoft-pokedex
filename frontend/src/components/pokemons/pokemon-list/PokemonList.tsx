import React from 'react';
import { PokemonListItemFragment } from '../../../graphql';
import {
  PokemonListItem,
  PokemonListItemProps,
} from '../pokemon-list-item/PokemonListItem';
import styles from './PokemonList.module.scss';
import classNames from 'classnames';

export interface PokemonListProps {
  items: PokemonListItemFragment[];
  layout?: PokemonListItemProps['layout'];
}

export const PokemonList: React.FC<PokemonListProps> =
  React.memo<PokemonListProps>((props) => {
    return (
      <div
        className={classNames(styles.root, {
          [styles.list]: props.layout === 'list',
          [styles.grid]: props.layout === 'grid',
        })}
      >
        {props.items.map((item) => (
          <PokemonListItem key={item.id} item={item} layout={props.layout} />
        ))}
      </div>
    );
  });

PokemonList.displayName = 'PokemonList';

PokemonList.defaultProps = {
  layout: 'grid',
};
