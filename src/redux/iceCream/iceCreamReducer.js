import { BUY_ICE_CREAM } from './iceCreamTypes';

const inititalState = {
  numOfIceCreams: 20,
};

export const iceCreamReducer = (state = inititalState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};

export default iceCreamReducer;
