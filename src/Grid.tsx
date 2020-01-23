/// <reference path="types/normalised.d.ts" />

import React, { useState, useEffect, useRef, useCallback, useContext } from 'react';
import Node from './Node'

import { dijkstra } from './algorithms'

import './Grid.css';
import AppContext from './AppContext';
import Stats from './components/stats'

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

const tempGrid: number[][] = [...Array(numX + 1)].map((val, i) => [...Array(numY + 1)].map((val, j) => {
    const newValue = (i === startX && j === startY) ?
        3 : (i === endX && j === endY) ? 4 : 0
    return newValue
}));

type Solution = {
    solution: {
        nodesTraversed: Normalised[],
        shortestPath: Normalised[]
    },
    totalTime: number,
    numberOfNodes: number,
}

const tempStats = {
    totalTime: 0,
    numberOfNodes: 0
}

const Grid: React.FC = () => {

    const { state, dispatch } = useContext<AppContext>(AppContext);

    const { status, renderSpeed }: { status: string, renderSpeed: number } = state

    /**
     * STATES
     */
    const [grid] = useState(tempGrid)
    const [values, setValues] = useState(tempGrid);
    const [stats, setStats] = useState(tempStats);
    const [solutionTimeouts, setSolutionTimeouts] = useState<NodeJS.Timeout[]>([]);

    const valuesRef = useRef(values)
    useEffect(() => {
        valuesRef.current = values
    })

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

    const [solution, setSolution] = useState<Solution | null>(null)
    const solutionRef = useRef(solution)
    useEffect(() => {
        solutionRef.current = solution
    })

    const runAlgorithm = () => {
        dispatch({ status: 'running' })
        const startPerformanceTime = window.performance.now()
        const solution: { nodesTraversed: Normalised[], shortestPath: Normalised[] } = dijkstra(valuesRef.current)
        const endPerformanceTime = window.performance.now()
        const totalTime = Math.round( (endPerformanceTime - startPerformanceTime) * 100 + Number.EPSILON ) / 100
        setSolution({ solution, totalTime, numberOfNodes: solution.nodesTraversed.length })
        dispatch({ status: 'finished' })
    }

    useEffect(() => {
        dispatch({ runAlgorithm: runAlgorithm })
    }, [])

    const setValuesWithNumber = (x: number, y: number, value: number) => {
        let newValuesGrid: number[][] = [...valuesRef.current];
        newValuesGrid[x][y] = value;
        setValues(newValuesGrid);
    }

    const animateShortestPath = (shortestPath: Normalised[]) => {
        const solutionTimeouts: NodeJS.Timeout[] = []
        shortestPath.forEach((e, i) => {
            const timeout = setTimeout(() => {
                if (values[e.x][e.y] !== 3 && values[e.x][e.y] !== 4) {
                    setValuesWithNumber(e.x, e.y, 6)
                }
            }, renderSpeed * i)
            solutionTimeouts.push(timeout)
        })
        setSolutionTimeouts((currentSolutionTimeouts) => [...currentSolutionTimeouts, ...solutionTimeouts])
    }

    const clearTimeouts = () => {
        solutionTimeouts.forEach(timeout => {
            clearTimeout(timeout)
        })
        setSolutionTimeouts([])
    }

    const cleanGrid = (removeWalls?: boolean) => {
        clearTimeouts()
        let newValuesGrid = [...values]
        let finalValuesGrid = newValuesGrid.map((row, i) => row.map((val, j) => {
            const curr = values[i][j]
            if (removeWalls) {
                if (curr !== 3 && curr !== 4) return 0
            } else {
                if (curr !== 3 && curr !== 4 && curr !== 1) return 0
            }
            return curr
        }))
        setValues(finalValuesGrid)
    }

    useEffect(() => {
        if (status === 'clear-all') {
            cleanGrid(true)
            setStats({totalTime: 0, numberOfNodes: 0})
        } else if (status === 'clear-solution') {
            cleanGrid(false)
            setStats({totalTime: 0, numberOfNodes: 0})
        }
    }, [status])

    useEffect(() => {
        if (!solution) return
        cleanGrid(false)
        const 
            { solution: { nodesTraversed, shortestPath }, totalTime, numberOfNodes }: 
                { 
                    solution: { nodesTraversed: Normalised[], shortestPath: Normalised[] },
                    totalTime: number,
                    numberOfNodes: number
                } = solution
        if (!nodesTraversed || !shortestPath) return

        setStats({totalTime, numberOfNodes})

        nodesTraversed.forEach((e, i) => {
            const solutionTimeouts: NodeJS.Timeout[] = []
            if (i === nodesTraversed.length - 1) {
                const timeout = setTimeout(() => {
                    animateShortestPath(shortestPath)
                }, renderSpeed * i)
                solutionTimeouts.push(timeout)
            }
            const timeout = setTimeout(() => {
                if (values[e.x][e.y] !== 3 && values[e.x][e.y] !== 4) {
                    setValuesWithNumber(e.x, e.y, 5)
                }
            }, renderSpeed * i)
            solutionTimeouts.push(timeout)
            setSolutionTimeouts((currentSolutionTimeouts) => [...currentSolutionTimeouts, ...solutionTimeouts])
        });
    }, [solution])


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
                        return (
                            <Node
                                key={`${i}-${j}`}
                                x={i}
                                y={j}
                                d={rectDiameter}
                                nodeState={values[i][j]}
                                onMouseDown={handleMouseDown}
                                onMouseUp={handleMouseUp}
                                onHover={handleHover}
                            />
                        )
                    }
                    )
                )
            }
            <Stats totalTime={stats.totalTime} numberOfNodes={stats.numberOfNodes} />
        </div>
    );
}

export default Grid