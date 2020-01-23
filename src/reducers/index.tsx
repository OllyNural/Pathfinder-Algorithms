import setStatus from './setStatus.reducer'
import setDarkTheme from './setDarkTheme.reducer'
import setRunAlgorithm from './setRunAlgorithm.reducer'
import setRenderSpeed from './setRenderSpeed.reducer'

const mainReducer = (state: StateContext, action: any) => {
  const {
    status,
    darkTheme,
    runAlgorithm,
    renderSpeed,
  } = state;
  return {
    ...state,
    status: setStatus(status, action),
    darkTheme: setDarkTheme(darkTheme, action),
    runAlgorithm: setRunAlgorithm(runAlgorithm, action),
    renderSpeed: setRenderSpeed(renderSpeed, action)
  };
};

export default mainReducer;
