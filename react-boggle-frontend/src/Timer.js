import React, { Component } from 'react';

class Timer extends Component {

  render() {
    console.log(this.props.timer)
    return (
      <div className="timer">{this.props.timer}</div>
    )
  }
}

export default Timer;
