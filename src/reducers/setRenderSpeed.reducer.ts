const setRenderSpeed = (state: StateContext["renderSpeed"], action: any) => {
    return action.renderSpeed || state
}

export default setRenderSpeed;
