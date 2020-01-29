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
};

declare interface AppContext {
    state: stateContext;
    dispatch: React.Dispatch<Action>
}