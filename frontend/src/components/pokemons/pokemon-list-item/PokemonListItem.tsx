import React from 'react';
import { Link } from 'react-router-dom';
import { PokemonListItemFragment, PokemonListViewType } from '../../../graphql';
import styles from './PokemonListItem.module.scss';
import { routes } from '../../../defs/Routes';
import { FavouriteButtonConnected } from '../../favourites';
import classNames from 'classnames';

type PokemonItem = Omit<PokemonListItemFragment, '__typename' | 'types'> &
  Partial<Pick<PokemonListItemFragment, 'types'>>;

export interface PokemonListItemProps {
  item: PokemonItem;
  layout?: PokemonListViewType;
}

export const PokemonListItem = React.memo<PokemonListItemProps>((props) => {
  return (
    <div
      className={classNames(styles.root, {
        [styles.list]: props.layout === PokemonListViewType.List,
        [styles.grid]: props.layout === PokemonListViewType.Grid,
      })}
    >
      <Link
        to={routes.pokemonDetail.generate({ name: props.item.name })}
        className={styles.imageLink}
      >
        <div
          role="img"
          style={{ backgroundImage: `url(${props.item.image})` }}
          className={styles.image}
        />
      </Link>
      <div className={styles.info}>
        <Link
          to={routes.pokemonDetail.generate({ name: props.item.name })}
          className={styles.description}
        >
          <span className={styles.label}>{props.item.name}</span>
          <span>{props.item.types?.join(', ')}</span>
        </Link>
        <div className={styles.actions}>
          <FavouriteButtonConnected id={props.item.id} />
        </div>
      </div>
    </div>
  );
});

PokemonListItem.displayName = 'PokemonListItem';
