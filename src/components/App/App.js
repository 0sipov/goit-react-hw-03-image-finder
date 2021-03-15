import React, { Component } from 'react';
import Searchbar from '../Searchbar';
import './App.module.css';
import getImgs from '../../utilites/fetch';

class App extends Component {
  state = { imgs: [] };

  render() {
    return (
      <>
        <Searchbar />
      </>
    );
  }
}

export default App;
