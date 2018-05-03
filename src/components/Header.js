import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';

class Header extends Component {
  render() {
    return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">To Don't List!</h1>
          <Link to={'/'}>Home </Link>
          <Link to={'/todos'}> To-Don'ts</Link>
        </header>
    );
  }
}

export default Header;