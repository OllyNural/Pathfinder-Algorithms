import setStatus from './setStatus.reducer'
import setRenderSpeed from './setRenderSpeed.reducer'
import setCurrentAlgorithm from './setCurrentAlgorithm.reducer'
import setOptions from './setOptions.reducer'

const mainReducer = (state: StateContext, action: any) => {
  const {
    status,
    renderSpeed,
    currentAlgorithm,
    options,
  } = state;
  return {
    ...state,
    status: setStatus(status, action),
    renderSpeed: setRenderSpeed(renderSpeed, action),
    currentAlgorithm: setCurrentAlgorithm(currentAlgorithm, action),
    options: setOptions(options, action)
  };
};

export default mainReducer;
