import React, { Component } from "react";
import ControlView from "./ControlView";
import Game from "./Game";
class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numPlayers: "1",
      gridSize: "4",
      theme: "numbers",
      gamePaused: false,
      gameStarted: false,
    };

    this.handleRestart = this.handleRestart.bind(this);
  }

  handleClick(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit() {
    this.setState({ gameStarted: !this.state.gameStarted });
  }

  handleRestart(settings) {
    this.setState({
      numPlayers: settings.numPlayers,
      gridSize: settings.gridSize,
      theme: settings.theme,
      gamePaused: false,
    });
  }

  render() {
    if (!this.state.gameStarted)
      return (
        <ControlView
          settings={this.state}
          handleClick={(evt) => this.handleClick(evt)}
          createGame={() => this.handleSubmit()}
        />
      );
    else {
      return (
        <Game
          key="1"
          numPlayers={this.state.numPlayers}
          gridSize={this.state.gridSize}
          theme={this.state.theme}
          newGame={this.createGame}
          handleRestart={this.handleRestart}
        />
      );
    }
  }
}

export default Control;
