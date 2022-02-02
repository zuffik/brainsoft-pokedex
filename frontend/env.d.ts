declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_GRAPHQL_URL: string;
    }
  }
}

export {};
