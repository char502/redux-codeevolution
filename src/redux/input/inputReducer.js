import { ADD_INPUT } from './inputTypes';
import { DELETE_INPUT } from './inputTypes';

const initialState = {
  arr: [],
};

const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INPUT:
      //   console.log(Object.assign({}, action.text));
      return {
        ...state,
        arr: [...state.arr, action.text],
      };
    case DELETE_INPUT:
      return {
        ...state,
        arr: state.arr.filter((item, index) => action.itemID !== index),
      };
    default:
      return state;
  }
};

export default inputReducer;
