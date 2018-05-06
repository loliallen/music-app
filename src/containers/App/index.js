import React, { Component } from 'react';
import './App.css';

import SearchPage from '../search';


class App extends Component {
  state ={page: 'table'} //grid, info, table,search
  render() {
    return(<SearchPage/>)
  }
}

export default App;
