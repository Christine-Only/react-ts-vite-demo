declare module '*.jpeg';


declare namespace CommonType {
  interface MenuInfo {
    key: string;
    keyPath: string[];
    /** @deprecated This will not support in future. You should avoid to use this */
    item: React.ReactInstance;
    domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>;
  }

  type Route = { name: string; path: string; component?: React.ReactDOM; children?: CommonRoute[] };
}

