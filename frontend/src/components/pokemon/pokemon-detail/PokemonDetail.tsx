import React from 'react';
import {
  PokemonFullFragment,
  PokemonListViewType,
  usePokemonDetailQuery,
} from '../../../graphql';
import { useParams } from 'react-router';
import { App404 } from '../../page';
import { RouteParams, routes } from '../../../defs/Routes';
import { Button } from 'carbon-components-react';
import { Play20 } from '@carbon/icons-react';
import { FavouriteButtonConnected } from '../../favourites';
import { PokemonListItem, PokemonListWrapper } from '../../pokemons';
import { PokemonDimensionTable } from '../pokemon-dimension-table/PokemonDimensionTable';
import { PokemonDetailLayout } from '../pokemon-detail-layout/PokemonDetailLayout';

export interface PokemonDetailProps {
  pokemon: PokemonFullFragment;
}

export const PokemonDetail: React.FC<PokemonDetailProps> =
  React.memo<PokemonDetailProps>((props) => {
    const audio = React.useMemo(
      () => new Audio(props.pokemon.sound),
      [props.pokemon.sound]
    );
    const handlePlaySound = React.useCallback(() => {
      audio.play();
    }, [audio]);
    return (
      <PokemonDetailLayout
        topContent={<img src={props.pokemon.image} alt={props.pokemon.name} />}
        mainContent={<h2>{props.pokemon.name}</h2>}
        actionsContent={
          <>
            <FavouriteButtonConnected id={props.pokemon.id} />
            <Button
              hasIconOnly
              renderIcon={Play20}
              iconDescription="Play pokemon sound"
              kind="tertiary"
              tooltipPosition="left"
              onClick={handlePlaySound}
            />
          </>
        }
        detailInfoContent={<PokemonDimensionTable pokemon={props.pokemon} />}
        bottomContent={
          <>
            <h3>Evolutions</h3>
            <PokemonListWrapper layout={PokemonListViewType.Grid}>
              {props.pokemon.evolutions.map((pokemon) => (
                <PokemonListItem
                  item={pokemon}
                  key={pokemon.id}
                  layout={PokemonListViewType.Grid}
                />
              ))}
              {props.pokemon.evolutions.length === 0 && (
                <strong>No evolutions</strong>
              )}
            </PokemonListWrapper>
          </>
        }
      />
    );
  });

PokemonDetail.displayName = 'PokemonDetail';

export interface PokemonDetailConnectedProps {}

export const PokemonDetailConnected: React.FC<PokemonDetailConnectedProps> = (
  props
) => {
  const { name } = useParams<RouteParams<typeof routes.pokemonDetail>>();
  const { data, loading } = usePokemonDetailQuery({
    variables: { name: name as string },
  });
  if (!loading && !data?.pokemonByName) {
    return <App404 />;
  }
  if (!data?.pokemonByName) return null;
  return <PokemonDetail pokemon={data.pokemonByName} />;
};
