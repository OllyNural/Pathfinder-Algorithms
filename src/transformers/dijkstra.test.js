import dijkstra from './dijkstra'

describe('Should transform correctly', () => {

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
            { value: 3, distance: 0, hasVisited: false, x: 2, y: 2 },
        ]
    ]
    it('Should transform correctly', () => {
        expect(dijkstra(data)).toEqual(transformedData)
    })
})