const setOptions = (state: StateContext["options"], action: any ) => {
    if (!action.options) return state
    const newDirections = { ...state.directions, ...action.options.directions  }

    return {
        ...state,
        directions: newDirections
    }
}

export default setOptions;
