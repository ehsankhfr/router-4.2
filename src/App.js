import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './Home';
import Roster from './Roster';

import { Link } from 'react-router-dom'

import {
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {
  static getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/roster'>Roster</Link></li>
            </ul>
          </nav>
        </header>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/roster' render={(props) => <Roster {...props} Age={App.getRandomInt(1,80)}/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
