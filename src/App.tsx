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
    currentAlgorithm: () => {},
    renderSpeed: 25,
    options: {
      directions: {
        north: true,
        northeast: false,
        east: true,
        southeast: false,
        south: true,
        southwest: false,
        west: true,
        northwest: false,
      }
    }
  }

  const [state, dispatch] = useReducer(MainReducer, initialState);
  const value = { state, dispatch };

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
