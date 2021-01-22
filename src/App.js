import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <h3 style={{ textDecoration: 'underline' }}>With Hooks</h3>
        <CakeContainer />
        <h3 style={{ textDecoration: 'underline' }}>Without Hooks</h3>
        <HooksCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
