import React, { Component } from 'react';
import './App.css';
import Search from './Search.js';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header>
          Hello <br>
          </br>
          Lets search for some movies!
          <br/>
          <br/>
        </header>
      </div>
    );
  }
}

export default Header;
