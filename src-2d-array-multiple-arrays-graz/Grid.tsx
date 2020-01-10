import React, { useEffect, useState } from 'react';
import Node from './Node'

import './Grid.css';

const rectDiameter = 25
const gridHeightRatio = 0.9

const START_X = 25
const START_Y = 25


const END_X = 5
const END_Y = 5

const Grid: React.FC = () => {

    const gridHeight: number = Math.floor(window.innerHeight * gridHeightRatio)
    const gridWidth: number = window.innerWidth

    const numX: number = Math.floor(gridHeight / rectDiameter)
    const numY: number = Math.floor(gridWidth / rectDiameter)

    const tempGrid: number[][] = [...Array(numX)].map(() => Array(numY).fill(0));

    const [grid, setGrid] = useState(tempGrid)
    const [values, setValues] = useState(tempGrid)

    const [isMousePressed, setMousePressed] = useState(false)
    const [nodeTypePointer, setNodeTypePointer] = useState(0)

    const paintNode = (x: number, y: number, currentTypeNode?: number) => {
        const el = document.getElementById(`${x}-${y}`)
        if (!el) return
        if (currentTypeNode) {
            currentTypeNode === 0 ? el.classList.add("node-wall") : el.classList.remove("node-wall")
        } else {
            nodeTypePointer === 0 ? el.classList.add("node-wall") : el.classList.remove("node-wall")
        }
    }

    const updateGridPosition = (x: number, y: number) => {
        const newValue = nodeTypePointer === 0 ? 1 : 0
        let newGrid: number[][] = grid
        newGrid[x][y] = newValue
        setGrid(newGrid)
    }

    const updateValuesPosition = (x: number, y: number, currentTypeNode?: number) => {
        let newValue
        if (currentTypeNode) {
            newValue = currentTypeNode === 0 ? 1 : 0
        } else {
            newValue = nodeTypePointer === 0 ? 1 : 0
        }
        let newValuesGrid: number[][] = values
        newValuesGrid[x][y] = newValue
        setValues(newValuesGrid)
    }

    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>, x: number, y: number) => {
        setNodeTypePointer(grid[x][y])
        setMousePressed(true)
        updateValuesPosition(x, y)
        updateGridPosition(x, y)
    }
 
    const handleMouseUp = (event: React.MouseEvent<HTMLDivElement>, x: number, y: number) => {
        setMousePressed(false)
    }

    const handleHover = (eveevent: React.MouseEvent<HTMLDivElement>, x: number, y: number) => {
        if (!isMousePressed) return
        updateGridPosition(x, y)
        updateValuesPosition(x, y)
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
                            key={`${i}-${j}`}
                            state={values[i][j]}
                            onMouseDown={handleMouseDown}
                            onMouseUp={handleMouseUp}
                            onHover={handleHover} />
                    )
                )
            }
        </div>
    );
}

export default Grid