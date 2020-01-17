declare type Normalised = {
  value: number,
  x: number,
  y: number,
}

declare type StateContext = {
  status: string,
  setStatus: (status: string) => void,
  solution: { nodesTraversed: Normalised[], shortestPath: Normalised[] } | null,
  darkTheme: boolean,
  setDarkTheme: () => void,
  runAlgorithm: () => void,
};

declare interface AppContext {
  state: stateContext;
  dispatch: ({type}:{type:string}) => void;
}