const setPerspective = (state: StateContext["perspective"], action: any) => {
    return action.perspective || state
}

export default setPerspective;
