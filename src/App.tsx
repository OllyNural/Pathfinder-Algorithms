/// <reference path="types/normalised.d.ts" />

import React, { useReducer } from 'react';

import './App.css';

// import MenuDrawerPersistent from './components/menuDrawerPersistent'
// import Grid from './Grid'
import PointOfViewWrapper from './components/pointOfViewWrapper'

import AppContext from './AppContext'
import MainReducer from './reducers'

const App: React.FC = () => {

    const initialState = {
        status: 'none',
        currentAlgorithm: () => { },
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
        },
        perspective: 'pov',
        currentGrid: [[0]],
        solution: undefined
    };

    const [state, dispatch] = useReducer(MainReducer, initialState);
    const value = { state, dispatch };

    return (
        <div className="App">
            <AppContext.Provider value={value} >
                <PointOfViewWrapper />
            </AppContext.Provider>
        </div>
    )
}

export default App;
