import React, { Component } from 'react';
import './App.css';

class Button extends Component {

  methodButton(){
    
  }


  render() {
    return (
      <div >
        <button type="button" onclick={this.methodButton}>Click me</button>
      </div>
    );
  }
}

export default Button;