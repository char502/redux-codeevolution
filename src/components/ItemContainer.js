import React from 'react';
import { connect } from 'react-redux';
import { buyCake, buyIceCream } from '../redux';

export const ItemContainer = props => {
  return (
    <div>
      <h2>Item - {props.item}</h2>
      <button onClick={props.buyItem}>Buy Items</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams;

  return {
    item: itemState,
  };
};

//ownProps are the props of the component itself
// in this example, if include cake prop when referring to itemContainer, it will act like the cake container
// if the cake prop is not present, it will act like the iceCream container

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchfunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());

  return {
    buyItem: dispatchfunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
// if only want mapDispatchToProps need to pass 'null' as first argument in connect function
