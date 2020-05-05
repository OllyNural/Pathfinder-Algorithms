type Perspective = 'pov' | 'topdown';

type NodeCell = {
    value: number,
    x: number,
    y: number
}

declare type StateContext = {
    status: string,
    currentAlgorithm: any,
    renderSpeed: number,
    options: {
        directions: {
            north: boolean,
            northeast: boolean,
            east: boolean,
            southeast: boolean,
            south: boolean,
            southwest: boolean,
            west: boolean,
            northwest: boolean,
        },
    },
    perspective: string,
    currentGrid: number[][],
    solution?: {
        nodesTraversed: NodeCell[],
        shortestPath: NodeCell[],
    }
};

declare interface AppContext {
    state: stateContext;
    dispatch: React.Dispatch<Action>
}