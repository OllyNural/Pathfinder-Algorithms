/// <reference path="types/dijkstra.d.ts" />
/// <reference path="types/normalised.d.ts" />

import React, { useState, SetStateAction, Dispatch } from 'react';
import './App.css';

import { dijkstra } from './algorithms'

import Grid from './Grid'

const App: React.FC = () => {

  const defaultEmptySolution: {nodesTraversed: Normalised[], shortestPath: Normalised[]} = {
    nodesTraversed: [],
    shortestPath: []
  }

  const [grid, setGrid] = useState()
  const [solution, setSolution] = useState(defaultEmptySolution)
  const [colourScheme, setColourScheme]: [string, Dispatch<SetStateAction<string>>] = useState('dark')

  const runAlgorithm = () => {
    const solution: { nodesTraversed: Normalised[], shortestPath: Normalised[] } = dijkstra(grid)
    setSolution(solution)
  }

  return (
    <div className="App">
      <header className="App-header">
        Pathfinder
      </header>
      <button onClick={runAlgorithm}> Run algorithm </button>
      <button onClick={() => setColourScheme('dark')}>Set Colour scheme dark</button>
      <Grid 
        colourScheme={colourScheme}
        setGrid={(values: number[][]) => setGrid(values)} 
        solution={solution} />
    </div>
  );
}

export default App;
