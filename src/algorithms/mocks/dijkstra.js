const data = [
    [
        1, 4, 0,
    ],
    [
        0, 1, 0,
    ],
    [
        0, 0, 3,
    ]
]

const transformedData = [
    [
        { value: 1, distance: 99999, parent: null, hasVisited: false, x: 0, y: 0 },
        { value: 4, distance: 99999, parent: null, hasVisited: false, x: 0, y: 1 },
        { value: 0, distance: 99999, parent: null, hasVisited: false, x: 0, y: 2 },
    ],
    [
        { value: 0, distance: 99999, parent: null, hasVisited: false, x: 1, y: 0 },
        { value: 1, distance: 99999, parent: null, hasVisited: false, x: 1, y: 1 },
        { value: 0, distance: 99999, parent: null, hasVisited: false, x: 1, y: 2 },
    ],
    [
        { value: 0, distance: 99999, parent: null, hasVisited: false, x: 2, y: 0 },
        { value: 0, distance: 99999, parent: null, hasVisited: false, x: 2, y: 1 },
        { value: 3, distance: 0, parent: null, hasVisited: true, x: 2, y: 2 },
    ]
]

const transformedDataSolved = [
    [
        { value: 1, distance: 99999, parent: null, hasVisited: false, x: 0, y: 0 },
        { value: 4, distance: 3, parent: { x: 0, y: 2 }, hasVisited: true, x: 0, y: 1 },
        { value: 0, distance: 2, parent: { x: 1, y: 2 }, hasVisited: true, x: 0, y: 2 },
    ],
    [
        { value: 0, distance: 3, parent: { x: 2, y: 0 }, hasVisited: true, x: 1, y: 0 },
        { value: 1, distance: 99999, parent: null, hasVisited: false, x: 1, y: 1 },
        { value: 0, distance: 1, parent: { x: 2, y: 2 }, hasVisited: true, x: 1, y: 2 },
    ],
    [
        { value: 0, distance: 2, parent: { x: 2, y: 1 }, hasVisited: true, x: 2, y: 0 },
        { value: 0, distance: 1, parent: { x: 2, y: 2 }, hasVisited: true, x: 2, y: 1 },
        { value: 3, distance: 0, parent: null, hasVisited: true, x: 2, y: 2 },
    ]
]

const transformedDataShortestPath = [
    { value: 0, distance: 1, parent: { x: 2, y: 2 }, hasVisited: true, x: 1, y: 2 },
    { value: 0, distance: 2, parent: { x: 1, y: 2 }, hasVisited: true, x: 0, y: 2 },
    { value: 4, distance: 3, parent: { x: 0, y: 2 }, hasVisited: true, x: 0, y: 1 }
]

const transformedDataShortestPathOutput = [
    { value: 0, x: 1, y: 2 },
    { value: 0, x: 0, y: 2 },
    { value: 4, x: 0, y: 1 }
]

const transformedDataNoStart = [
    [
        { value: 1, distance: 99999, parent: null, hasVisited: false, x: 0, y: 0 },
        { value: 4, distance: 99999, parent: null, hasVisited: false, x: 0, y: 1 },
        { value: 0, distance: 99999, parent: null, hasVisited: false, x: 0, y: 2 },
    ],
    [
        { value: 0, distance: 99999, parent: null, hasVisited: false, x: 1, y: 0 },
        { value: 1, distance: 99999, parent: null, hasVisited: false, x: 1, y: 1 },
        { value: 0, distance: 99999, parent: null, hasVisited: false, x: 1, y: 2 },
    ],
    [
        { value: 0, distance: 99999, parent: null, hasVisited: false, x: 2, y: 0 },
        { value: 0, distance: 99999, parent: null, hasVisited: false, x: 2, y: 1 },
        { value: 0, distance: 0, parent: null, hasVisited: true, x: 2, y: 2 },
    ]
]

const transformedDataNoEnd = [
    [
        { value: 1, distance: 99999, parent: null, hasVisited: false, x: 0, y: 0 },
        { value: 0, distance: 99999, parent: null, hasVisited: false, x: 0, y: 1 },
        { value: 0, distance: 99999, parent: null, hasVisited: false, x: 0, y: 2 },
    ],
    [
        { value: 0, distance: 99999, parent: null, hasVisited: false, x: 1, y: 0 },
        { value: 1, distance: 99999, parent: null, hasVisited: false, x: 1, y: 1 },
        { value: 0, distance: 99999, parent: null, hasVisited: false, x: 1, y: 2 },
    ],
    [
        { value: 0, distance: 99999, parent: null, hasVisited: false, x: 2, y: 0 },
        { value: 0, distance: 99999, parent: null, hasVisited: false, x: 2, y: 1 },
        { value: 3, distance: 0, parent: null, hasVisited: true, x: 2, y: 2 },
    ]
]

const nodesTraversed = [
    { value: 3, x: 2, y: 2 },
    { value: 0, x: 1, y: 2 },
    { value: 0, x: 2, y: 1 },
    { value: 0, x: 0, y: 2 },
    { value: 0, x: 2, y: 0 },
    { value: 4, x: 0, y: 1 }
]

export {
    data,
    transformedData,
    transformedDataSolved,
    transformedDataNoStart,
    transformedDataNoEnd,
    transformedDataShortestPath,
    nodesTraversed,
    transformedDataShortestPathOutput,
}