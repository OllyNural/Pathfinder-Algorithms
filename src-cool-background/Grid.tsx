import React from 'react';
import Node from './Node'

import './Grid.css';

const rectDiameter = 20
const gridHeightRatio = 0.9

const Grid: React.FC = () => {

    const gridHeight: number = window.innerWidth
    const gridWidth: number = window.innerHeight * gridHeightRatio

    const numX: number = Math.floor(gridHeight / rectDiameter)
    const numY: number = Math.floor(gridWidth / rectDiameter)

    const grid = [...Array(numX)].map(e => Array(numY).fill(0));

    console.log(grid);

    return (
        <div className='gridContainer' >
            {
                grid.map((row: number[], i: number) =>
                    row.map((val: number, j: number) =>
                        <Node x={i} y={j} d={rectDiameter} state={val} />
                    )
                )
            }
        </div>
    );
}

export default Grid
