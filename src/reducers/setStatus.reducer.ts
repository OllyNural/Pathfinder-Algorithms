const setStatus = (state: StateContext["status"], action: any) => {
    return action.status || state
}

export default setStatus;
