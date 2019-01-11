import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello_World from './Hello_World.js';
import Goodbye from './Goodbye.js';
import Button from './Button.js';
import Title from './Title.js';
import SecondState from './SecondState.js';
import ChangeTitle from './ChangeTitle.js';

class App extends Component {
  render() {
    return (
      <div >
          <ChangeTitle/>
        <Hello_World helloProp="Title"/>
        <Title/>
        <Goodbye/>
        <SecondState/>
      
      </div>
    );
  }
}

export default App;
