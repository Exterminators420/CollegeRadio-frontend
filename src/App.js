import React, { Component } from 'react';
import './App.css';
import YTSearch from './Components/ytsearch';
import Navbar from "./Components/navbar"

class App extends Component {

  render() {
    return (
      <div className="App">

        <Navbar />

        <YTSearch/>

      </div>
    );
  }
}

export default App;
