import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux';

function HooksCakeContainer() {
  const numOfCakes = useSelector(state => state.numOfCakes);
  // useSelector returns anything that is returned by this selector function
  const dispatch = useDispatch();
  // This returns a reference to the dispatch function from the redux store
  // saving in a variable means this can now be used to dispatch actions as needed (see line 13 below)
  return (
    <div>
      <h2>Num of cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
}

// useSelector - is a close equivalent to the mapStateToProps function
// i.e. to get hold of any state that is maintained in the redux store

export default HooksCakeContainer;
