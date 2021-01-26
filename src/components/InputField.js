import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addInput } from '../redux';

function InputField(props) {
  const [inputText, setInputText] = useState('');

  const handleChange = e => {
    let { value } = e.target;

    // console.log(inputText);
    setInputText(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    let text = {
      text: inputText,
    };
    console.log(text);
    setInputText('');

    props.addInput(text);

    console.log(props);
  };

  console.log(props);

  return (
    <div>
      <h3>Task List Form</h3>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={inputText} />
        <button type='submit'>Add to List</button>
        {/* <button>Delete From List</button> */}
      </form>
      <div>{props.text.text}</div>
      {/* <div>{props.text.map(item => item)}</div> */}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    text: state.inputReducer.text,
  };
};

const mapDispatchToProps = dispatch => ({
  addInput: text => dispatch(addInput(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputField);
