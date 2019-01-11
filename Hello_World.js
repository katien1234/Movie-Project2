import React, { Component } from 'react';
import './App.css';

class Hello_World extends Component {
  render() {
    return (
      <div >
        <p><h1>{this.props.helloProp}</h1></p>
      </div>
    );
  }
}

export default Hello_World;