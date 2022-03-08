import React, { Component } from "react";
import { PlayerWrapper } from "./Components/PlayerWrapper.styles";

class Timer extends Component {
  constructor(props) {
    super(props);

    //props: isTiming, time
    this.state = { isTiming: this.props.isTiming, timer: Date.now() };
    this.renderTime = this.renderTime.bind(this);

    this.formatTime = this.formatTime.bind(this);
  }
  componentDidMount() {
    setInterval(() => this.renderTime(), 1000);
  }
  renderTime() {
    if (this.state.isTiming) {
      this.setState({ timer: this.state.timer + 1 });
    }
  }

  formatTime() {
    let timer = this.state.timer;
    const time = `${!(timer % 60) ? (timer += 1) : timer + 0}:${timer % 60}`;

    return time;
  }

  render() {
    return (
      <PlayerWrapper>
        <span>Time</span>
        <span>{this.state.timer}</span>
      </PlayerWrapper>
    );
  }
}

export default Timer;
