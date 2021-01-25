import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addInput, deleteInput } from '../redux';

function InputField() {
  const [inputText, setInputText] = useState('');

  const handleChange = e => {
    let { value } = e.target;

    setInputText(value);
  };

  return (
    <div>
      <label htmlFor=''>
        <input type='text' onChange={handleChange} value={inputText} />
        <button>Add to List</button>
        <button>Delete From List</button>
      </label>
      <div>Result Here</div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    text: state.inputR.text,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addInput: text => dispatch(addInput(text)),
    deleteInput: itemID => dispatch(deleteInput(itemID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputField);
