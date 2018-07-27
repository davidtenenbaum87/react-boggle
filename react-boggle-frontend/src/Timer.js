import React, { Component } from 'react';

class Timer extends Component {
  state = {
    timer: 10,
  }

  componentDidMount() {
    this.interval = setInterval(this.startTimer, 1000)
  }

  startTimer = () => {
    this.setState({
      timer: this.state.timer - 1,
    })
  }

  stopTimer = () => {
    clearInterval(this.interval)
    this.setState({
      timer: 10
    }, () => console.log(this.state))
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  render() {
    console.log(this.state)
    if (this.state.timer >= 0) {
      return (
        <div className="timer">{this.state.timer}</div>
      )
    } else {
      this.stopTimer();
    }
  }
}

export default Timer;
