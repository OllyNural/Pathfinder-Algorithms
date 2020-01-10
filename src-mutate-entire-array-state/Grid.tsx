import React from 'react';
import Node from './Node'

import './Grid.css';
import { useState } from 'react';

import update from 'immutability-helper';

const rectDiameter = 20
const gridHeightRatio = 0.9

const Grid: React.FC = () => {

    const gridHeight: number = Math.floor(window.innerHeight * gridHeightRatio)
    const gridWidth: number = window.innerWidth

    const numX: number = Math.floor(gridHeight / rectDiameter)
    const numY: number = Math.floor(gridWidth / rectDiameter)

    const tempGrid: number[][] = [...Array(numX)].map(() => Array(numY).fill(0));

    const [grid, setGrid] = useState(tempGrid)

    const handleClick = (event: React.MouseEvent<HTMLDivElement>, x: number, y: number) => {
        event.persist()
        // console.log('handleClick')
        // console.log(x, y)
    }

    const handleHover = (event: React.MouseEvent<HTMLDivElement>, x: number, y: number) => {
        event.persist()
        // console.log('handleHover')
        // console.log(x, y)
        if (event.buttons) {
            // console.log('is clicked while hover')


            const newValue = grid[x][y] === 0 ? 1 : 0
            const newGrid = update(grid, { [x]: { [y]: {$set: newValue } }})
            // console.log(newGrid)
            setGrid(newGrid)
        }
    }

    return (
        <div className='gridContainer' >
            {
                grid.map((row: number[], i: number) =>
                    row.map((val: number, j: number) =>
                        <Node
                            x={i}
                            y={j}
                            d={rectDiameter}
                            state={val}
                            onHover={handleHover}
                            onClick={handleClick} />
                    )
                )
            }
        </div>
    );
}

export default Grid
