import { generatePath, Params } from 'react-router';

class Route<T extends string = string> {
  constructor(public readonly path: string) {}

  public createChildRoute<C extends string = string>(
    subPath: string
  ): Route<C & T> {
    return new Route<C & T>((this.path + '/' + subPath).replace('//', '/'));
  }

  public generate(data?: Params<T>): string {
    return generatePath(this.path, data);
  }
}

const root = new Route('/');

export const routes = {
  root,
};
