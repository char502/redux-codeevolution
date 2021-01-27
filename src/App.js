import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import InputField from './components/InputField';
import CakeContainer from './components/CakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import SelectNumCakesContainer from './components/SelectNumCakesContainer';
import ItemContainer from './components/ItemContainer';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <div
          style={{
            textDecoration: 'underline',
            backgroundColor: 'lightBlue',
            padding: '20px',
            maxWidth: '500px',
            margin: '0 auto',
          }}
        >
          <h3>An Input Field and Button</h3>
          <InputField />
        </div>
        <div
          style={{
            textDecoration: 'underline',
            backgroundColor: 'lightGreen',
            padding: '20px',
            maxWidth: '500px',
            margin: '0 auto',
          }}
        >
          <h3>Cake Container Choose Number of Cakes to buy</h3>
          <SelectNumCakesContainer />
        </div>
        <div
          style={{
            textDecoration: 'underline',
            backgroundColor: 'Yellow',
            padding: '20px',
            maxWidth: '500px',
            margin: '0 auto',
          }}
        >
          <h3>Cake Container Without Hooks</h3>
          <CakeContainer />
        </div>
        <div
          style={{
            textDecoration: 'underline',
            backgroundColor: 'Red',
            padding: '20px',
            maxWidth: '500px',
            margin: '0 auto',
          }}
        >
          <h3 style={{ textDecoration: 'underline' }}>
            Ice Cream Container Without Hooks
          </h3>
          <IceCreamContainer />
        </div>
        <div
          style={{
            textDecoration: 'underline',
            backgroundColor: 'lightBlue',
            padding: '20px',
            maxWidth: '500px',
            margin: '0 auto',
          }}
        >
          <h3>With Hooks</h3>
          <HooksCakeContainer />
        </div>
        <div>
          <h3>Item Container 1</h3>
          <ItemContainer cake />
        </div>
        <div>
          <h3>Item Container 2</h3>
          <ItemContainer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
