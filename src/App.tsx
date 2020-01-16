/// <reference path="types/normalised.d.ts" />

import React, { useState } from 'react';

import './App.css';

import { dijkstra } from './algorithms'

import Grid from './Grid'
import MenuDrawerPersistent from './components/menuDrawerPersistent'

const App: React.FC = () => {

  const defaultEmptySolution: { nodesTraversed: Normalised[], shortestPath: Normalised[] } = {
    nodesTraversed: [],
    shortestPath: []
  }

  const [grid, setGrid] = useState()
  const [solution, setSolution] = useState(defaultEmptySolution)
  const [isDarkTheme, setDarkTheme] = useState(true)

  const runAlgorithm = () => {
    const solution: { nodesTraversed: Normalised[], shortestPath: Normalised[] } = dijkstra(grid)
    setSolution(solution)
  }

  const handleChange = () => {
    setDarkTheme(prevState => !prevState)
  };

  return (
    <div className="App">
      <MenuDrawerPersistent isDarkTheme={isDarkTheme} handleChange={handleChange} />
      <Grid
        darkTheme={isDarkTheme}
        setGrid={(values: number[][]) => setGrid(values)}
        solution={solution} />
    </div>
  );
}

export default App;
