import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import TodosContainer from './containers/TodosContainer';
import MyRoutes from './config/Routes'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        { MyRoutes }
      </div>
    );
  }
}

export default App;
