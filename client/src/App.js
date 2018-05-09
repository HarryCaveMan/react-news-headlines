import React, { Component } from 'react';
import Header from './components/Header/Header';
import './App.css';

import Main from './components/main';

class App extends Component {
  
  render() {
    return (
      <div className="app">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
