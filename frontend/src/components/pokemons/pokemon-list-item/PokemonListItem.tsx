import React from 'react';
import { Link } from 'react-router-dom';
import {
  PokemonListItemFragment,
  pokemonListView,
  pokemonPreview,
  usePokemonListItemQuery,
} from '../../../graphql';
import styles from './PokemonListItem.module.scss';
import { routes } from '../../../defs/Routes';
import { FavouriteButtonConnected } from '../../favourites';
import { Button } from 'carbon-components-react';
import { ZoomIn24 } from '@carbon/icons-react';
import { useReactiveVar } from '@apollo/client';
import {
  PokemonListItemWrapper,
  PokemonListItemWrapperProps,
} from '../pokemon-list-item-wraper/PokemonListItemWrapper';

type PokemonItem = Omit<PokemonListItemFragment, '__typename' | 'types'> &
  Partial<Pick<PokemonListItemFragment, 'types'>>;

export interface PokemonListItemProps {
  item: PokemonItem;
  layout?: PokemonListItemWrapperProps['layout'];
  showPreviewButton?: boolean;
  onShowPreview?: () => void;
}

export const PokemonListItem = React.memo<PokemonListItemProps>((props) => {
  return (
    <PokemonListItemWrapper layout={props.layout}>
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
          {props.showPreviewButton && (
            <Button
              hasIconOnly
              renderIcon={ZoomIn24}
              iconDescription="Preview"
              kind="ghost"
              size="sm"
              onClick={props.onShowPreview}
            />
          )}
          <div className={styles.favouriteButton}>
            <FavouriteButtonConnected id={props.item.id} />
          </div>
        </div>
      </div>
    </PokemonListItemWrapper>
  );
});

PokemonListItem.displayName = 'PokemonListItem';

export interface PokemonListItemConnectedProps {
  id: string;
}

export const PokemonListItemConnected: React.FC<
  PokemonListItemConnectedProps
> = (props) => {
  const { data } = usePokemonListItemQuery({
    variables: { id: props.id },
    fetchPolicy: 'cache-only',
  });
  const layout = useReactiveVar(pokemonListView);
  const handleShowPreview: PokemonListItemProps['onShowPreview'] =
    React.useCallback(() => {
      pokemonPreview(props.id);
    }, [props.id]);
  return (
    <PokemonListItem
      showPreviewButton
      item={data?.pokemonById!}
      layout={layout}
      onShowPreview={handleShowPreview}
    />
  );
};
