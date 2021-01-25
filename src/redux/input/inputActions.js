import { ADD_INPUT } from './inputTypes';
import { DELETE_INPUT } from './inputTypes';

export const addInput = text => {
  return {
    type: ADD_INPUT,
    text: text,
  };
};

export const deleteInput = itemID => {
  return {
    type: DELETE_INPUT,
    itemID: itemID,
  };
};
