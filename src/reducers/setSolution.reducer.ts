const setSolution = (state: StateContext["solution"], action: any) => {
    return action.solution || state
}

export default setSolution;
