import React from 'react';
import {
  pokemonPreview,
  PokemonPreviewFragment,
  usePokemonPreviewQuery,
} from '../../../graphql';
import { useReactiveVar } from '@apollo/client';
import { Modal } from 'carbon-components-react';
import { PokemonPreviewContent } from '../pokemon-preview-content/PokemonPreviewContent';

export interface PokemonPreviewProps {
  pokemon?: PokemonPreviewFragment | null;
  open?: boolean;
  onClose?: () => void;
}

export const PokemonPreview = React.memo<PokemonPreviewProps>((props) => {
  return (
    <Modal
      open={!!props.pokemon}
      modalHeading={props.pokemon?.name}
      modalLabel="Pokemon info"
      primaryButtonText="OK"
      onRequestClose={props.onClose}
      onRequestSubmit={props.onClose}
    >
      {props.pokemon && <PokemonPreviewContent pokemon={props.pokemon} />}
    </Modal>
  );
});

PokemonPreview.displayName = 'PokemonPreview';

export interface PokemonPreviewConnectedProps {}

export const PokemonPreviewConnected: React.FC<PokemonPreviewConnectedProps> = (
  props
) => {
  const id = useReactiveVar(pokemonPreview);
  const { data } = usePokemonPreviewQuery({
    variables: { id: id! },
    skip: !id,
  });
  const handleClose = React.useCallback(() => {
    pokemonPreview(undefined);
  }, []);
  return (
    <PokemonPreview
      pokemon={data?.pokemonById}
      open={!!id}
      onClose={handleClose}
    />
  );
};
