declare type StateContext = {
    status: string,
    currentAlgorithm: any,
    renderSpeed: number,
};

declare interface AppContext {
    state: stateContext;
    dispatch: React.Dispatch<Action>
}