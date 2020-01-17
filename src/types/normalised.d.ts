declare type Normalised = {
  value: number,
  x: number,
  y: number,
}

declare type StateContext = {
  status: string,
  darkTheme: boolean,
  runAlgorithm: () => void,
};

declare interface AppContext {
  state: stateContext;
  dispatch: React.Dispatch<Action>
}