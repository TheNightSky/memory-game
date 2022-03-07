import React, { Component } from "react";
import Game from "./Game";

class BuildGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numPlayers: 1,
      gridSize: 4,
      theme: "nums",
      gameStarted: false,
    };
    this.createGame.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  createGame() {
    this.setState({ gameStarted: !this.state.gameStarted });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.createGame();
  }

  render() {
    if (!this.state.gameStarted) {
      return (
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="button"
              name="theme"
              value="nums"
              onClick={this.handleClick}
            />
            <input
              type="button"
              name="theme"
              value="icons"
              onClick={this.handleClick}
            />
          </div>
          <div>
            <input
              type="button"
              name="numPlayers"
              value="1"
              onClick={this.handleClick}
            />
            <input
              type="button"
              name="numPlayers"
              value="2"
              onClick={this.handleClick}
            />
            <input
              type="button"
              name="numPlayers"
              value="3"
              onClick={this.handleClick}
            />
            <input
              type="button"
              name="numPlayers"
              value="4"
              onClick={this.handleClick}
            />
          </div>
          <div>
            <input
              type="button"
              name="gridSize"
              value="4x4"
              onClick={this.handleClick}
            />

            <input
              type="button"
              name="gridSize"
              value="6x6"
              onClick={this.handleClick}
            />
          </div>

          <button>Start Game</button>
        </form>
      );
    } else {
      return (
        <Game
          key="1"
          numPlayers={this.state.numPlayers}
          gridSize={this.state.gridSize}
          theme={this.state.theme}
          newGame={this.createGame}
        />
      );
    }
  }
}

export default BuildGame;
