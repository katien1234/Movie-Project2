import React, { Component } from 'react';

class Title extends Component {
  constructor() {
    super();
    this.state = {
      stateText: 'blah',
   
    }
    this.update = () => this.setState({
      stateText: 'blahh'
    })
  }
 
 
 
 
  render() {
    return (
      <div>
        <button onClick={ this.update }>Click this</button>
        <p>
          { this.state.stateText }
        </p>
      </div>
      );
  }
}

export default Title;