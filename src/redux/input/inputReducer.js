import { ADD_INPUT } from './inputTypes';
import { DELETE_INPUT } from './inputTypes';

const inputReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_INPUT:
      return [...state, Object.assign({}, action.text)];
    case DELETE_INPUT:
      return state.filter((textData, index) => index !== action.itemID);
    default:
      return state;
  }
};

export default inputReducer;
