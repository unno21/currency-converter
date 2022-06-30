import React from 'react';

import './App.css';

import Header from './components/Header';
import Conversion from './components/currency-converter/Conversion';
import ConversionHistory from './components/history/ConversionHistory';

const App = () => {
  return (
    <div className="app">
      <div className="app__content">
        <Header />
        <Conversion />
        <ConversionHistory />
      </div>
    </div>
  );
};

export default App;
