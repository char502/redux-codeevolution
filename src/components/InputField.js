import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addInput, deleteInput } from '../redux';

function InputField(props) {
  const [inputText, setInputText] = useState('');

  const handleChange = e => {
    let { value } = e.target;
    setInputText(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    let text = {
      text: inputText,
    };
    setInputText('');
    props.addInput(text);
  };

  const deleteItem = (itemID, e) => {
    console.log(e);
    console.log(itemID);
    console.log(deleteInput);
    props.deleteInput(itemID);
  };

  return (
    <div>
      <h3>Task List Form</h3>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={inputText} />
        <button type='submit'>Add to List</button>
        {/* <button>Delete From List</button> */}
      </form>
      <div>
        {props.arr.map((item, index) => (
          <div key={item.text}>
            <div>{item.text}</div>
            <button onClick={e => deleteItem(index, e)}>Delete Item</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    arr: state.inputReducer.arr,
  };
};

const mapDispatchToProps = dispatch => ({
  addInput: text => dispatch(addInput(text)),
  deleteInput: itemID => dispatch(deleteInput(itemID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputField);
