import setStatus from './setStatus.reducer'
import setRenderSpeed from './setRenderSpeed.reducer'
import setCurrentAlgorithm from './setCurrentAlgorithm.reducer'
import setOptions from './setOptions.reducer'
import setPerspective from './setPerspective.reducer'
import setCurrentGrid from './setCurrentGrid.reducer'
import setSolution from './setSolution.reducer'

const mainReducer = (state: StateContext, action: any) => {
  const {
    status,
    renderSpeed,
    currentAlgorithm,
    options,
    perspective,
    currentGrid,
    solution,
  } = state;
  return {
    ...state,
    status: setStatus(status, action),
    renderSpeed: setRenderSpeed(renderSpeed, action),
    currentAlgorithm: setCurrentAlgorithm(currentAlgorithm, action),
    options: setOptions(options, action),
    perspective: setPerspective(perspective, action),
    currentGrid: setCurrentGrid(currentGrid, action),
    solution: setSolution(solution, action)
  };
};

export default mainReducer;
