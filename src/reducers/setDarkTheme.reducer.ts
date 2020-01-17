const setDarkTheme = (state: StateContext["darkTheme"], action: any) => {
    return action.darkTheme || state
}

export default setDarkTheme;
