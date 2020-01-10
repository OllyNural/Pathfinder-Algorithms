import React, { useState, useEffect, useRef, useCallback } from 'react';
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

    const [currStartCoords, setStartCoords] = useState([startX, startY])
    const [currEndCoords, setEndCoords] = useState([endX, endY])
    const [isMovingStart, setMovingStart] = useState(false)
    
    const [grid, setGrid] = useState(tempGrid)
    const [isMousePressed, setMousePressed] = useState(false)
    const [nodeTypePointer, setNodeTypePointer] = useState(0)

    let isMovingStartRef = useRef(isMovingStart);
    useEffect(() => {
        isMovingStartRef.current = isMovingStart;
    });

    let isMousePressedRef = useRef(isMousePressed)
    useEffect(() => {
        isMousePressedRef.current = isMousePressed;
    });

    useEffect(() => {
        const currentStart = document.getElementById(`${startX}-${startY}`)
        if (currentStart) currentStart.classList.add('node-start')
        const currentEnd = document.getElementById(`${endX}-${endY}`)
        if (currentEnd) currentEnd.classList.add('node-finish')
    }, [])

    const paintNode = (x: number, y: number, currentTypeNode?: number) => {
        const el = document.getElementById(`${x}-${y}`)
        if (!el) return
        if (currentTypeNode) {
            currentTypeNode === 0 ? el.classList.add("node-wall") : el.classList.remove("node-wall")
        } else {
            nodeTypePointer === 0 ? el.classList.add("node-wall") : el.classList.remove("node-wall")
        }
    }

    const updateGridPosition = (x: number, y: number, type: string) => {
        let newValue
        switch (type) {
            case 'wall':
                newValue = nodeTypePointer === 0 ? 1 : 0
            case 'start':
                newValue = 3
            case 'end':
                newValue = 4
            default:
                newValue = 0
        }
        let newGrid: number[][] = grid
        newGrid[x][y] = newValue
        setGrid(newGrid)
    }

    const handleMouseDown = (x: number, y: number) => {
        // console.log('test')
        if ((x === startX && y === startY)) {
            setMousePressed(true)
            setMovingStart(true)
        } else if ((x === endX && y === endY)) {
            setMousePressed(true)
            setMovingStart(true)
        } else {
            setNodeTypePointer(grid[x][y])
            setMousePressed(true)
            paintNode(x, y, grid[x][y])
            updateGridPosition(x, y, 'wall')
        }
    }

    const handleMouseUp = (x: number, y: number) => {
        if (isMovingStartRef.current) {
            console.log(x, y)
            console.log(startX, startY)
            // Check if it's not the end node
            if (startX === endX && startY === endY) return
            // If not, Remove wall class from the node
            const currentStart = document.getElementById(`${startX}-${startY}`)
            if (currentStart) currentStart.classList.remove('node-wall')
            // Remove old start

            // Add new start
        }
        setMousePressed(false)
        setMovingStart(false)
    }

    const handleHover = (x: number, y: number) => {
        if (!isMousePressedRef.current) return
        // console.log('handleHover pressed')
        if (isMovingStartRef.current) {
            if (startX === endX && startY === endY) return
            const prevEl = document.getElementById(`${startX}-${startY}`)
            if (prevEl) prevEl.classList.remove('node-start')
            const newEl = document.getElementById(`${x}-${y}`)
            if (newEl) newEl.classList.add('node-start')
            startX = x
            startY = y
        } else {
            // console.log('drawing wall')
            updateGridPosition(x, y, 'wall')
            paintNode(x, y)
        }
    }

    useEffect(() => {
        document.addEventListener('mousePressed', (e) => {
            console.log(e)
        })
    }, [])

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
                        />
                    )
                )
            }
        </div>
    );
}

export default Grid