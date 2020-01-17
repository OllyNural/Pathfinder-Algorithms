/// <reference path="types/normalised.d.ts" />

import React, { useState, useReducer } from 'react';

import './App.css';

import { dijkstra } from './algorithms'

import Grid from './Grid'
import MenuDrawerPersistent from './components/menuDrawerPersistent'

import AppContext from './AppContext'
import MainReducer from './reducers'

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
    setStatus('run')
    setSolution(solution)
  }

  const handleThemeChange = () => {
    setDarkTheme(prevState => !prevState)
  }

  const initialState = {
    status: 'reset',
    darkTheme: true,
    solution: solution,
    runAlgorithm: runAlgorithm,
  }

  const [state, dispatch] = useReducer(MainReducer, initialState);
  const value = { state, dispatch };

  return (
    <div className="App">
      <AppContext.Provider value={value} >
        <MenuDrawerPersistent />
        <Grid
          setGrid={(values: number[][]) => setGrid(values)}
          />
      </AppContext.Provider>
    </div>
  )
}

export default App;
