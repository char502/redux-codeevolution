import { ADD_INPUT } from './inputTypes';
import { DELETE_INPUT } from './inputTypes';

const initialState = {
  text: '',
};

const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INPUT:
      //   console.log(Object.assign({}, action.text));
      return {
        ...state,
        text: action.text,
      };
    case DELETE_INPUT:
      return state.filter((textData, index) => index !== action.itemID);
    default:
      return state;
  }
};

export default inputReducer;
