import React, { useState, useEffect, useRef } from 'react';
import Node from './Node'

import './Grid.css';

const rectDiameter = 25
const gridHeightRatio = 0.9

const gridHeight: number = Math.floor(window.innerHeight * gridHeightRatio)
const gridWidth: number = window.innerWidth

const numX: number = Math.floor(gridHeight / rectDiameter) + 1
const numY: number = Math.floor(gridWidth / rectDiameter)

let startX: number = Math.floor(numX * 0.5)
let startY: number = Math.floor(numY * 0.25)
let endX: number = Math.floor(numX * 0.5)
let endY: number = Math.floor(numY * 0.75)

let prevWallState: number = 1

const tempGrid: number[][] = [...Array(numX)].map((val, i) => [...Array(numY)].map((val, j) => {
    const newValue = (i === startX && j === startY) ?
        3 : (i === endX && j === endY) ? 4 : 0
    return newValue
}));

const Grid: React.FC = () => {
    /**
     * STATES
     */
    const [grid] = useState(tempGrid)
    const [values, setValues] = useState(tempGrid);

    const [isMovingStart, setMovingStart] = useState(false)
    const isMovingStartRef = useRef(isMovingStart)
    useEffect(() => {
        isMovingStartRef.current = isMovingStart
    })

    const [isMovingEnd, setMovingEnd] = useState(false)
    const isMovingEndRef = useRef(isMovingEnd)
    useEffect(() => {
        isMovingEndRef.current = isMovingEnd
    })

    const [isMousePressed, setMousePressed] = useState(false)
    const isMousePressedRef = useRef(isMousePressed)
    useEffect(() => {
        isMousePressedRef.current = isMousePressed
    })

    const [nodeTypePointer, setNodeTypePointer] = useState(0)
    const nodeTypePointerRef = useRef(nodeTypePointer)
    useEffect(() => {
        nodeTypePointerRef.current = nodeTypePointer
    })

    const setValuesWithNumber = (x: number, y: number, value: number) => {
        let newValuesGrid: number[][] = [...values];
        newValuesGrid[x][y] = value;
        setValues(newValuesGrid);
    }

    const updateWallValuesPosition = (x: number, y: number, currentTypeNode?: number) => {
        let newValue: number = 0
        if (currentTypeNode !== undefined) newValue = (currentTypeNode === 0 ? 1 : 0)
        else newValue = (nodeTypePointerRef.current === 0 ? 1 : 0)
        setValuesWithNumber(x, y, newValue)
    }

    const handleMouseDown = (x: number, y: number) => {
        if ((x === startX && y === startY)) {
            setMousePressed(true)
            setMovingStart(true)
        } else if ((x === endX && y === endY)) {
            setMousePressed(true)
            setMovingEnd(true)
        } else {
            setNodeTypePointer(values[x][y])
            setMousePressed(true)
            updateWallValuesPosition(x, y, values[x][y])
        }
    }

    const handleMouseUp = (x: number, y: number) => {
        if (isMovingStartRef.current) {
            if (x === endX && y === endY) {
                setValuesWithNumber(startX, startY, 3)
            } else {
                setValuesWithNumber(x, y, 3)
            }
        } else if (isMovingEndRef.current) {
            if (x === startX && y === startY) {
                setValuesWithNumber(endX, endY, 4)
            } else {
                setValuesWithNumber(x, y, 4)
            }
        }
        setMousePressed(false)
        setMovingStart(false)
        setMovingEnd(false)
        prevWallState = 1
    }

    const handleHover = (x: number, y: number) => {
        if (!isMousePressedRef.current) return
        if (isMovingStartRef.current) {
            if (x === endX && y === endY) return
            
            updateWallValuesPosition(startX, startY, prevWallState)
            prevWallState = values[x][y] === 1 ? 0 : 1
            setValuesWithNumber(x, y, 3)
            startX = x
            startY = y
        } else if (isMovingEndRef.current) {
            if (x === startX && y === startY) return

            updateWallValuesPosition(endX, endY, prevWallState)
            prevWallState = values[x][y] === 1 ? 0 : 1
            setValuesWithNumber(x, y, 4)
            endX = x
            endY = y
        } else {
            if (values[x][y] !== 3 && values[x][y] !== 4) updateWallValuesPosition(x, y)
        }
    }

    return (
        <div className='gridContainer' >
            {
                grid.map((row: number[], i: number) =>
                    row.map((val: number, j: number) => {
                        const state = values[i][j]

                        return (
                            <Node
                                key={`${i}-${j}`}
                                x={i}
                                y={j}
                                d={rectDiameter}
                                state={state}
                                onMouseDown={handleMouseDown}
                                onMouseUp={handleMouseUp}
                                onHover={handleHover}
                            />
                        )
                    }
                    )
                )
            }
        </div>
    );
}

export default Grid