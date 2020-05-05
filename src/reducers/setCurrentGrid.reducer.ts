const setCurrentGrid = (state: StateContext["currentGrid"], action: any) => {
    return action.currentGrid || state
}

export default setCurrentGrid;
