import React from 'react';
import { Provider } from 'react-redux';

import './App.css';


import Header from './components/Header';
import Conversion from './components/currency-converter/Conversion';
import ConversionHistory from './components/history/ConversionHistory';

import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <div className="app__content">
          <Header />
          <Conversion />
          <ConversionHistory />
        </div>
      </div>
    </Provider>
  );
};

export default App;
