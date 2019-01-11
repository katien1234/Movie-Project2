import React, { Component } from 'react';
import Hello_World from './Hello_World.js';

class SecondState extends Component {
  constructor() {
    super();
    this.state = {
    stateText: "Hello World", 
      
   
    }
    this.update = () => this.setState({
      stateText: 'BOOOOOOOOOOOO'
    })
  }
 
 
  render() {
    return (
      <div>
          <Hello_World helloProp={this.state.stateText}/>
        <button onClick={ this.update }>CLICK ME</button>
      </div>
      );
  }
}

export default SecondState;