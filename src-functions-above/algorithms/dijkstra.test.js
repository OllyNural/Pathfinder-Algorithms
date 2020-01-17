import { dijkstra, findIndexFromValue, sortUnvisitedNodes, findShortestPath } from './dijkstra'
import {
    data,
    transformedData,
    transformedDataNoStart,
    transformedDataNoEnd,
    transformedDataSolved,
    transformedDataShortestPath,
    nodesTraversed,
    transformedDataShortestPathOutput
} from './mocks/dijkstra'

describe('dijkstra', () => {
    it('Should transform correctly', () => {
        expect(dijkstra(data)).toEqual({ nodesTraversed: nodesTraversed, shortestPath: transformedDataShortestPathOutput })
    })
})

describe('findIndexFromValue', () => {
    it('Should find the start index correctly', () => {
        expect(findIndexFromValue(transformedData, 3)).toEqual({ x: 2, y: 2 })
    })

    it('Should find the end index correctly', () => {
        expect(findIndexFromValue(transformedData, 4)).toEqual({ x: 0, y: 1 })
    })

    it('Should return 0, 0 if no start index is provided', () => {
        expect(findIndexFromValue(transformedDataNoStart, 3)).toEqual({ x: 0, y: 0 })
    })

    it('Should return 0, 0 if no end index is provided', () => {
        expect(findIndexFromValue(transformedDataNoEnd, 4)).toEqual({ x: 0, y: 0 })
    })
})

describe('sortUnvisitedNodes', () => {
    const first = { value: 1, distance: 99999, hasVisited: false, x: 0, y: 0 }
    const second = { value: 1, distance: 0, hasVisited: false, x: 0, y: 0 }
    it('Should return -1 when the items are in the incorrect order', () => {
        expect(sortUnvisitedNodes(first, second)).toBe(-1)
    })

    it('Should return 1 when the items are in the correct order', () => {
        expect(sortUnvisitedNodes(second, first)).toBe(1)
    })
})

describe('findShortestPath', () => {
    it('Should find the shortest path from start to end', () => {
        expect(findShortestPath(transformedDataSolved)).toEqual(transformedDataShortestPath)
    })
})