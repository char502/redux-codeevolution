import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import InputField from './components/InputField';
import CakeContainer from './components/CakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import HooksCakeContainer from './components/HooksCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <h3 style={{ textDecoration: 'underline' }}>
          An Input Field and Button
        </h3>
        <InputField />
        <h3 style={{ textDecoration: 'underline' }}>
          Cake Container Without Hooks
        </h3>
        <CakeContainer />
        <h3 style={{ textDecoration: 'underline' }}>
          Ice Cream Container Without Hooks
        </h3>
        <IceCreamContainer />
        <h3 style={{ textDecoration: 'underline' }}>With Hooks</h3>
        <HooksCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
