// https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm

import { default as transformer } from '../transformers/dijkstra'

type DObj = {
    value: number,
    distance: number,
    hasVisited: boolean,
    x: number,
    y: number,
}

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

const dijkstraMain = (dirtyGrid: number[][]) => {
    const grid: DObj[][] = transformer(dirtyGrid);
    const unvisitedNodes = []
    const nodesTraversed = []
    // Get current coords
    const { x, y }: { x: number, y: number } = findStartIndex(grid)
    // set current coords as visited
    grid[x][y].hasVisited = true
    unvisitedNodes.push(grid[x][y])
    unvisitedNodes.push(grid[0][0])
    while (unvisitedNodes.length > 0) {
        console.log('hi')
        console.log(unvisitedNodes)
        unvisitedNodes.sort(sortUnvisitedNodes)
        console.log(unvisitedNodes)

        const currentNode = unvisitedNodes.pop()
        
        
        
        nodesTraversed.push(currentNode)
    }
    // console.log(x, y)
    // console.log(grid)

    return grid
}

export {
    dijkstraMain,
    findStartIndex,
    sortUnvisitedNodes,
}