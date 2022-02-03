import React from 'react';
import { AppHeader } from '../app-header/AppHeader';
import { Route, Routes } from 'react-router';
import { routes } from '../../../defs/Routes';

const PokemonList = React.lazy(() => import('./pages/PokemonList'));
const PokemonDetail = React.lazy(() => import('./pages/PokemonDetail'));

export interface AppRouterLayoutProps {}

export const AppRouterLayout = React.memo<AppRouterLayoutProps>((props) => {
  return (
    <>
      <AppHeader />
      <Routes>
        <Route
          path={routes.root.path}
          element={
            <React.Suspense fallback={null}>
              <PokemonList />
            </React.Suspense>
          }
        />
        <Route
          path={routes.pokemonDetail.path}
          element={
            <React.Suspense fallback={null}>
              <PokemonDetail />
            </React.Suspense>
          }
        />
        <Route element={<>404</>} />
      </Routes>
    </>
  );
});

AppRouterLayout.displayName = 'AppRouterLayout';
