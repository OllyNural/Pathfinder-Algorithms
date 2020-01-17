declare type Normalised = {
  value: number,
  x: number,
  y: number,
}

declare type AppContext = {
  status: string,
  setStatus: (status: string) => void,
  solution: { nodesTraversed: Normalised[], shortestPath: Normalised[] } | null,
  darkTheme: boolean,
  setDarkTheme: () => void,
  runAlgorithm: () => void,
};
