import React from 'react';
import { AppHeader } from '../app-header/AppHeader';
import { Route, Routes } from 'react-router';
import { routes } from '../../../defs/Routes';

const PokemonListFilterable = React.lazy(
  () => import('./pages/PokemonListFilterable')
);

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
              <PokemonListFilterable />
            </React.Suspense>
          }
        />
        <Route element={null} />
      </Routes>
    </>
  );
});

AppRouterLayout.displayName = 'AppRouterLayout';