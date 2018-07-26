import React, { Component } from 'react';

class Button extends Component {
  handleClick = () => {
    this.props.newGame();
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.props.name}</button>
    )
  }
}

export default Button;
