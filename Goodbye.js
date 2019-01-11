import React, { Component } from 'react';
import './App.css';

class Goodbye extends Component {
  render() {
    return (
      <div >
        {this.props.byeProp}
      </div>
    );
  }
}

export default Goodbye;