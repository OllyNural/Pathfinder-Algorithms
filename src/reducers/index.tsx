import setStatus from './setStatus.reducer'
import setRenderSpeed from './setRenderSpeed.reducer'
import setCurrentAlgorithm from './setCurrentAlgorithm.reducer'

const mainReducer = (state: StateContext, action: any) => {
  const {
    status,
    renderSpeed,
    currentAlgorithm,
  } = state;
  return {
    ...state,
    status: setStatus(status, action),
    renderSpeed: setRenderSpeed(renderSpeed, action),
    currentAlgorithm: setCurrentAlgorithm(currentAlgorithm, action)
  };
};

export default mainReducer;
