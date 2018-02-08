import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class List extends Component{
  render() {
    return (
      <div className="List">My Component List</div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My APP React</h1>
        </header>
        <p className="App-intro">
          <List/>
        </p>
      </div>
    );
  }
}

export default App;
