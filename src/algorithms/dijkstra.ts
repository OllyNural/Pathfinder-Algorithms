// https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm

import { default as transformer } from '../transformers/dijkstra'

type DObj = {
    value: number,
    distance: number,
    hasVisited: boolean,
    x: number,
    y: number,
}

const dirs = [
    (x: number, y: number) => ({ x: x - 1, y }), // North
    (x: number, y: number) => ({ x, y: y + 1 }), // East
    (x: number, y: number) => ({ x: x + 1, y }), // South
    (x: number, y: number) => ({ x, y: y - 1 }), // West
]

const sortUnvisitedNodes = (first: DObj, second: DObj) => {
    if (first.distance > second.distance) return -1
    return 1
}

const findStartIndex = (grid: DObj[][]) => {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j].value === 3) return { x: i, y: j }
        }
    }
    return { x: 0, y: 0 }
}

const findSurroundingNodes = (grid: DObj[][], currentNode: DObj) => {

    
}

const dijkstraMain = (dirtyGrid: number[][]) => {
    const grid: DObj[][] = transformer(dirtyGrid)
    const unvisitedNodes: DObj[] = []
    const nodesTraversed = []
    const { x, y }: { x: number, y: number } = findStartIndex(grid)
    grid[x][y].hasVisited = true
    unvisitedNodes.push(grid[x][y])
    while (unvisitedNodes.length > 0) {
        console.log('--------------------')
        const currentNode = unvisitedNodes.pop()
        console.log('currentNode', currentNode)
        currentNode.hasVisited = true
        nodesTraversed.push(currentNode)

        dirs.forEach((getNewCoords) => {
            const {x, y} : {x: number, y: number} = getNewCoords(currentNode.x, currentNode.y)
            if (grid[x] && grid[x][y] && grid[x][y].value !== 1 && grid[x][y].hasVisited === false) {
                unvisitedNodes.push(grid[x][y])
            }
        })

        unvisitedNodes.sort(sortUnvisitedNodes)
        console.log(grid)
        console.log('unvisited nodes', unvisitedNodes)
    }

    return grid
}

export {
    dijkstraMain,
    findStartIndex,
    sortUnvisitedNodes,
    findSurroundingNodes,
}