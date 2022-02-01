import React from 'react';
import styles from './PokemonListTabs.module.scss';
import { Tab, Tabs } from 'carbon-components-react';
import { TabsProps } from 'carbon-components-react/lib/components/Tabs/Tabs';
import classNames from 'classnames';
import { PokemonListFilterableQuery } from '../../../graphql';
import { PokemonListFilterableConnected } from '../pokemon-list-filterable/PokemonListFilterable';

export interface PokemonListTabsProps extends TabsProps {
  allPokemons?: PokemonListFilterableQuery;
  favouritePokemons?: PokemonListFilterableQuery;
}

export const PokemonListTabs = React.memo<PokemonListTabsProps>((props) => {
  const { allPokemons, favouritePokemons, ...rest } = props;
  return (
    <Tabs {...rest} className={classNames(props.className, styles.root)}>
      <Tab id="tab-all" label="All">
        <PokemonListFilterableConnected id="all" prefetchedData={allPokemons} />
      </Tab>
      <Tab id="tab-favourites" label="Favourites">
        <PokemonListFilterableConnected
          prefetchedData={favouritePokemons}
          id="favourites"
        />
      </Tab>
    </Tabs>
  );
});

PokemonListTabs.displayName = 'PokemonListTabs';
