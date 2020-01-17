const setStatus = (state: StateContext["status"], action: any) => action.status || state;

export default setStatus;
