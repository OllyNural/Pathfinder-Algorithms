declare type Dijkstra = {
    value: number,
    distance: number,
    parent: { x: number, y: number } | null,
    hasVisited: boolean,
    x: number,
    y: number,
}
