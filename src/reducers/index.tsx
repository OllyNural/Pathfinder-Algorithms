import setStatus from './setStatus.reducer'
import setDarkTheme from './setDarkTheme.reducer'
import setRunAlgorithm from './setRunAlgorithm.reducer'

const mainReducer = (state: StateContext, action: any) => {
  const {
    status,
    darkTheme,
    runAlgorithm
  } = state;
  return {
    ...state,
    status: setStatus(status, action),
    darkTheme: setDarkTheme(darkTheme, action),
    runAlgorithm: setRunAlgorithm(runAlgorithm, action),
  };
};

export default mainReducer;
