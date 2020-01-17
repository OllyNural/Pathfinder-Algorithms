/// <reference path="types/normalised.d.ts" />

import React, { useState } from 'react';

import './App.css';

import { dijkstra } from './algorithms'

import Grid from './Grid'
import MenuDrawerPersistent from './components/menuDrawerPersistent'

import AppContext from './AppContext'

const App: React.FC = () => {

  const defaultEmptySolution: { nodesTraversed: Normalised[], shortestPath: Normalised[] } = {
    nodesTraversed: [],
    shortestPath: []
  }

  const [grid, setGrid] = useState()
  const [status, setStatus] = useState('reset')
  const [solution, setSolution] = useState(defaultEmptySolution)
  const [isDarkTheme, setDarkTheme] = useState(true)

  const runAlgorithm = () => {
    const solution: { nodesTraversed: Normalised[], shortestPath: Normalised[] } = dijkstra(grid)
    setStatus('run')
    setSolution(solution)
  }

  const handleThemeChange = () => {
    setDarkTheme(prevState => !prevState)
  }

  return (
    <div className="App">
      <AppContext.Provider value={{
        status: status,
        setStatus: (status: string) => setStatus(status),
        darkTheme: isDarkTheme,
        solution: solution,
        setDarkTheme: () => handleThemeChange,
        runAlgorithm: runAlgorithm,
      }} >
        <MenuDrawerPersistent />
        <Grid
          setGrid={(values: number[][]) => setGrid(values)}
          />
      </AppContext.Provider>
    </div>
  )
}

export default App;
