import { dijkstraMain, findStartIndex, sortUnvisitedNodes, findSurroundingNodes } from './dijkstra'
import { data, transformedData, transformedDataNoStart } from './mocks/dijkstra'

describe('dijkstraMain', () => {
    it('Should transform correctly', () => {
        expect(dijkstraMain(data)).toEqual(transformedData)
    })
})

describe('findStartIndex', () => {
    it('Should find the start index correctly', () => {
        expect(findStartIndex(transformedData)).toEqual({ x: 2, y: 2 })
    })

    it('Should return 0, 0 if no start index is provided', () => {
        expect(findStartIndex(transformedDataNoStart)).toEqual({ x: 0, y: 0 })
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

describe('findSurroundingNodes', () => {
    it('Should find surrounding nodes correctly', () => {
        const currentNode = { value: 3, distance: 0, hasVisited: true, x: 2, y: 2 }
        expect(findSurroundingNodes(transformedData, currentNode)).toHaveLength(1)
    })
})