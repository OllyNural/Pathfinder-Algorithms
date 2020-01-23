/// <reference path="types/normalised.d.ts" />

import React, { useReducer } from 'react';

import './App.css';

import MenuDrawerPersistent from './components/menuDrawerPersistent'
import Grid from './Grid'

import AppContext from './AppContext'
import MainReducer from './reducers'

const App: React.FC = () => {

  const initialState = {
    status: 'none',
    darkTheme: true,
    runAlgorithm: () => null,
    renderSpeed: 25,
  }

  const [state, dispatch] = useReducer(MainReducer, initialState);
  const value = { state, dispatch };

  console.log('re-rendering app')

  return (
    <div className="App">
      <AppContext.Provider value={value} >
        <MenuDrawerPersistent />
        <Grid />
      </AppContext.Provider>
    </div>
  )
}

export default App;
