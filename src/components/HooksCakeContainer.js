import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux';
import { buyIceCream } from '../redux';

function HooksCakeContainer() {
  const numOfCakes = useSelector(state => state.cake.numOfCakes);
  const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams);
  // useSelector returns anything that is returned by this selector function
  const dispatch = useDispatch();
  // This returns a reference to the dispatch function from the redux store
  // saving in a variable means this can now be used to dispatch actions as needed (see line 13 below)
  return (
    <div>
      <h2>Num of cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>

      <h2>Num of iceCreams - {numOfIceCreams}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy Ice Cream</button>
    </div>
  );
}

// useSelector - is a close equivalent to the mapStateToProps function
// i.e. to get hold of any state that is maintained in the redux store

export default HooksCakeContainer;
