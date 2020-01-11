const dijkstra = (grid: number[][]) =>
    grid.map((row: number[], i: number) =>
        row.map((val: number, j: number) => ({
            value: val,
            distance: val === 3 ? 0 : 99999,
            hasVisited: false,
            x: i,
            y: j
        })
    ))

export default dijkstra