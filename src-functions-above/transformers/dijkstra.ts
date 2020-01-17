/// <reference path="../types/dijkstra.d.ts" />

const input = (grid: number[][]) =>
    grid.map((row: number[], i: number) =>
        row.map((val: number, j: number) => ({
            value: val,
            distance: val === 3 ? 0 : 99999,
            parent: null,
            hasVisited: false,
            x: i,
            y: j
        })
        ))

const output = (grid: Dijkstra[]) =>
    grid.map((entry: Dijkstra) => ({
        value: entry.value,
        x: entry.x,
        y: entry.y
    })
)

export {
    input,
    output
}