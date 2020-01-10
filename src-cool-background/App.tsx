import React from 'react';
import './App.css';

import GridContext from './GridContext'
import Grid from './Grid'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        Hello
      </header>
      <GridContext.Provider value={0}>
        <Grid />
      </GridContext.Provider>
    </div>
  );
}

export default App;
