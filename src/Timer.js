import React, { Component } from "react";
import DynamicTimer from "./DynamicTimer";
import "./DynamicTimer.css";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeEnMs: 0
    };
    this.start = this.start.bind(this);
    this.pause = this.pause.bind(this);
    this.reset = this.reset.bind(this);
  }
  start() {
    if (this.state.interval) {
      return;
    }
    const interval = setInterval(() => {
      this.setState({
        timeEnMs: this.state.timeEnMs + 1000
      });
    }, 1000);
    this.setState({
      interval: interval
    });
  }
  pause() {
    if (!this.state.interval) {
      return;
    }
    clearInterval(this.state.interval);
    this.setState({
      interval: NaN
    });
  }
  reset() {
    this.setState({
      timeEnMs: 0
    });
  }
  render() {
    return (
      <div>
        <h1 className="title"> REACT DYNAMIC TIME COMPONENT</h1>
        <DynamicTimer ms={this.state.timeEnMs} />
        <br />
        <div className="buttons">
          <input
            className="btn-start"
            type="button"
            value="Start"
            onClick={this.start}
          />
          <input
            className="btn-pause"
            type="button"
            value="Pause"
            onClick={this.pause}
          />
          <input
            className="btn-reset"
            type="button"
            value="reset"
            onClick={this.reset}
          />
        </div>
      </div>
    );
  }
}

export default Timer;
