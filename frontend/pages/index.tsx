import type { GetServerSidePropsResult, NextPage } from 'next';
import Head from 'next/head';
import { PokemonListTabs, PokemonListTabsProps } from '../src/components';
import {
  apolloClient,
  PokemonListFilterableDocument,
  PokemonListFilterableQuery,
  PokemonListFilterableQueryVariables,
} from '../src/graphql';

export interface HomePageProps
  extends Pick<PokemonListTabsProps, 'allPokemons' | 'favouritePokemons'> {}

export async function getServerSideProps(): Promise<
  GetServerSidePropsResult<Partial<HomePageProps>>
> {
  const { data: allPokemons } =
    await apolloClient.query<PokemonListFilterableQuery>({
      query: PokemonListFilterableDocument,
      variables: {
        query: { limit: 10, offset: 0 },
      } as PokemonListFilterableQueryVariables,
    });
  const { data: favouritePokemons } =
    await apolloClient.query<PokemonListFilterableQuery>({
      query: PokemonListFilterableDocument,
      variables: {
        query: { limit: 10, offset: 0, filter: { isFavorite: true } },
      } as PokemonListFilterableQueryVariables,
    });
  return {
    props: {
      allPokemons,
      favouritePokemons,
    },
  };
}

const Home: NextPage<HomePageProps> = (props) => {
  return (
    <>
      <Head>
        <title>Pokedex</title>
        <meta name="description" content="Pokedex app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PokemonListTabs
        allPokemons={props.allPokemons}
        favouritePokemons={props.favouritePokemons}
      />
    </>
  );
};

export default Home;
