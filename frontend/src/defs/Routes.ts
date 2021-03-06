import { generatePath, Params } from 'react-router';

class Route<T extends string = string> {
  constructor(public readonly path: string) {}

  public createChildRoute<C extends string = string>(
    subPath: string
  ): Route<C & T> {
    return new Route<C & T>((this.path + subPath).replace(/\/\//g, '/'));
  }

  public generate(data?: Params<T>): string {
    return generatePath(this.path, data);
  }
}

export type RouteParams<R> = R extends Route<infer P>
  ? { [K in P]: string }
  : {};

const root = new Route('/');

const pokemonDetail = root.createChildRoute<'name'>('/:name');

export const routes = {
  root,
  pokemonDetail,
};
