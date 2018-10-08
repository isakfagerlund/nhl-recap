import React, { Component } from 'react';
import LatestGames from './Components/LatestGames'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>NHL Recap</h1>
        <LatestGames />
      </div>
    );
  }
}

export default App;
