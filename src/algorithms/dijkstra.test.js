import { dijkstraMain, findStartIndex, sortUnvisitedNodes } from './dijkstra'

const data = [
    [
        1, 0, 0,
    ],
    [
        0, 1, 1,
    ],
    [
        4, 0, 3,
    ]
]
const transformedData = [
    [
        { value: 1, distance: 99999, hasVisited: false, x: 0, y: 0 },
        { value: 0, distance: 99999, hasVisited: false, x: 0, y: 1 },
        { value: 0, distance: 99999, hasVisited: false, x: 0, y: 2 },
    ],
    [
        { value: 0, distance: 99999, hasVisited: false, x: 1, y: 0 },
        { value: 1, distance: 99999, hasVisited: false, x: 1, y: 1 },
        { value: 1, distance: 99999, hasVisited: false, x: 1, y: 2 },
    ],
    [
        { value: 4, distance: 99999, hasVisited: false, x: 2, y: 0 },
        { value: 0, distance: 99999, hasVisited: false, x: 2, y: 1 },
        { value: 3, distance: 0, hasVisited: true, x: 2, y: 2 },
    ]
]
describe('dijkstraMain', () => {
    it('Should transform correctly', () => {
        expect(dijkstraMain(data)).toEqual(transformedData)
    })
})

describe('findStartIndex', () => {
    it('Should find the start index correctly', () => {
        expect(findStartIndex(transformedData)).toEqual({x: 2, y: 2})
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