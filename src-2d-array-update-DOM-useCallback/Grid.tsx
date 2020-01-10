import React, { useState, useCallback } from 'react';
import Node from './Node'

import './Grid.css';

const rectDiameter = 25
const gridHeightRatio = 0.9

const Grid: React.FC = () => {

    const gridHeight: number = Math.floor(window.innerHeight * gridHeightRatio)
    const gridWidth: number = window.innerWidth

    const numX: number = Math.floor(gridHeight / rectDiameter)
    const numY: number = Math.floor(gridWidth / rectDiameter)

    let startX = Math.floor(numX * 0.5)
    let startY = Math.floor(numY * 0.25)
    let endX = Math.floor(numX * 0.5)
    let endY = Math.floor(numY * 0.75)

    // const tempGrid: number[][] = [...Array(numX)].map((x) => Array(numY).map((y) => createNode(x, y)));
    const tempGrid: number[][] = [...Array(numX)].map(() => Array(numY).fill(0));

    const [grid, setGrid] = useState(tempGrid)
    const [isMousePressed, setMousePressed] = useState(false)
    const [isMovingStart, setMovingStart] = useState(false)
    const [nodeTypePointer, setNodeTypePointer] = useState(0)

    const paintNode = useCallback((x: number, y: number, currentTypeNode?: number) => {
        const el = document.getElementById(`${x}-${y}`)
        if (!el) return
        if (currentTypeNode) {
            currentTypeNode === 0 ? el.classList.add("node-wall") : el.classList.remove("node-wall")
        } else {
            nodeTypePointer === 0 ? el.classList.add("node-wall") : el.classList.remove("node-wall")
        }
    }, [nodeTypePointer])

    const updateGridPosition = useCallback((x: number, y: number) => {
        const newValue = nodeTypePointer === 0 ? 1 : 0
        let newGrid: number[][] = grid
        newGrid[x][y] = newValue
        setGrid(newGrid)
    }, [nodeTypePointer, grid])

    const handleMouseDown = useCallback((x: number, y: number) => {
        if ((x === startX && y === startY)) {
            console.log('before clicked on a start node')
            setMovingStart(true)
            console.log('after clicked on a start node')
        } else if ((x === endX && y === endY)) {
            console.log('clicked on an end node')
        } else {
            console.log('clicked on a wall')
            setNodeTypePointer(grid[x][y])
            setMousePressed(true)
            paintNode(x, y, grid[x][y])
            updateGridPosition(x, y)
        }
    }, [endX, endY, grid, paintNode, startX, startY, updateGridPosition])

    const handleMouseUp = useCallback((x: number, y: number) => {
        setMousePressed(false)
        setMovingStart(false)
    }, [])

    console.log('re-render')

    const handleHover = useCallback((x: number, y: number) => {
        if (!isMousePressed) return
        if (isMovingStart) {
            console.log('dragging from x ')
            // startX = x
            // startY = y
        } else {
            console.log('drawing wall')
            updateGridPosition(x, y)
            paintNode(x, y)
        }
    }, [isMousePressed, isMovingStart, updateGridPosition, paintNode])

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
                            onMouseDown={handleMouseDown}
                            onMouseUp={handleMouseUp}
                            onHover={handleHover}
                            isStart={(i === startX) && (j === startY)}
                            isFinish={(i === endX) && (j === endY)}
                        />
                    )
                )
            }
        </div>
    );
}

export default Grid