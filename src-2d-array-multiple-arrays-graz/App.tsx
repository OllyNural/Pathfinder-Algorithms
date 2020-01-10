import React from 'react';
import './App.css';

// import GridContext from '../src-konva/GridContext'
import Grid from './Grid'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        Pathfinder
      </header>
        <Grid />
    </div>
  );
}

export default App;
