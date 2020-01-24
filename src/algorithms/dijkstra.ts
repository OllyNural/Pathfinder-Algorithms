// https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm
/// <reference path="../types/dijkstra.d.ts" />
import { input, output } from '../transformers/dijkstra'

const dirs = [
    (x: number, y: number) => ({ x: x - 1, y }), // North
    (x: number, y: number) => ({ x, y: y + 1 }), // East
    (x: number, y: number) => ({ x: x + 1, y }), // South
    (x: number, y: number) => ({ x, y: y - 1 }), // West
    // (x: number, y: number) => ({ x: x + 1, y: y - 1 }), // South 
    // (x: number, y: number) => ({ x: x - 1, y: y - 1 }), // South 
    // (x: number, y: number) => ({ x: x - 1, y: y + 1 }), // South 
    // (x: number, y: number) => ({ x: x + 1, y: y + 1 }), // South 
]

const sortUnvisitedNodes = (first: Dijkstra, second: Dijkstra) => {
    if (first.distance > second.distance) return -1
    return 1
}

const findIndexFromValue = (grid: Dijkstra[][], value: number) => {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j].value === value) return { x: i, y: j }
        }
    }
    return { x: 0, y: 0 }
}

const findShortestPath = (grid: Dijkstra[][]) => {
    const shortestPath: Dijkstra[] = []
    // Start at 4th position
    const { x, y }: { x: number, y: number } = findIndexFromValue(grid, 4)
    let currentIndex = grid[x][y]
    while (currentIndex.parent !== null) {
        shortestPath.push(currentIndex)
        currentIndex = grid[currentIndex.parent.x][currentIndex.parent.y]
    }
    return shortestPath.reverse()
}

const dijkstra = (dirtyGrid: number[][]) => {
    const grid: Dijkstra[][] = input(dirtyGrid)
    const unvisitedNodes: Dijkstra[] = []
    const nodesTraversed: Dijkstra[] = []
    const { x, y }: { x: number, y: number } = findIndexFromValue(grid, 3)
    grid[x][y].hasVisited = true
    unvisitedNodes.push(grid[x][y])
    while (unvisitedNodes.length > 0) {
        const currentNode = unvisitedNodes.pop()
        // Goddamn Typescript
        if (!currentNode) break;
        nodesTraversed.push(currentNode)
        if (currentNode.value === 4) break;

        dirs.forEach((getNewCoords) => {
            const { x, y }: { x: number, y: number } = getNewCoords(currentNode.x, currentNode.y)
            if (grid[x] && grid[x][y] && grid[x][y].value !== 1 && grid[x][y].hasVisited === false) {
                const newNode = grid[x][y]
                newNode.distance = currentNode.distance + 1
                newNode.parent = { x: currentNode.x, y: currentNode.y }
                newNode.hasVisited = true
                unvisitedNodes.push(newNode)
            }
        })
        unvisitedNodes.sort(sortUnvisitedNodes)
    }
    const shortestPath = findShortestPath(grid)
    return {
        nodesTraversed: output(nodesTraversed),
        shortestPath: output(shortestPath)
    }
}

export {
    dijkstra,
    findIndexFromValue,
    sortUnvisitedNodes,
    findShortestPath,
}