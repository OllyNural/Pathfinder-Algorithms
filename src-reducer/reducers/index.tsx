import setStatus from './setStatus.reducer'

const mainReducer = (state: StateContext, action: any) => {
  const {
    status
  } = state;
  return {
    ...state,
    status: setStatus(status, action),
  };
};

export default mainReducer;
