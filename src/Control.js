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
  }

  handleClick(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit() {
    this.setState({ gameStarted: !this.state.gameStarted });
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
        <div>
          <Game
            key="1"
            numPlayers={this.state.numPlayers}
            gridSize={this.state.gridSize}
            theme={this.state.theme}
            gameStarted={this.state.gameStarted}
            newGame={() => this.handleSubmit()}
          />
        </div>
      );
    }
  }
}

export default Control;
