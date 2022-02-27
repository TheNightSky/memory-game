import React, { Component } from "react";
import GamePiece from "./GamePiece";
import Player from "./Player";
class Game extends Component {
  constructor(props) {
    super(props);

    let icons = {
      0: "arrows",
      1: "badge",
      2: "bandit",
      3: "boot",
      4: "cactus",
      5: "cowSkull",
      6: "dreamCatcher",
      7: "gallow",
      8: "horse",
      9: "horseshoe",
      10: "native",
      11: "pickaxe",
      12: "pistol",
      13: "saloon",
      14: "sheriff",
      15: "tomahawk",
      16: "wagon",
      17: "wantedPoster",
    };

    let numbers = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
    ];

    this.state = {
      gamePieces: [],
      players: this.createPlayers(),
      timer: false,
      board: this.createBoard(),
    };

    this.createPlayers = this.createPlayers.bind(this);
    this.createBoard = this.createBoard.bind(this);
  }

  createBoard() {
    let board = [];
    let grid = parseInt(this.props.gridSize);
    for (let i = 0; i < grid; i++) {
      let row = [];
      for (let j = 0; j < grid; j++) {
        row.push(<GamePiece key={[i, j]} active={false} />);
      }
      board.push(row);
    }
    return board;
  }

  createPlayers() {
    let num = parseInt(this.props.numPlayers);
    if (num === 1) return this.singlePlayermode();
    else {
      let players = [];
      for (let i = 0; i < num; i++) {
        players.push(<Player key={i + 1} currPlayer={false} />);
      }

      return players;
    }
  }

  render() {
    return (
      <div>
        <h1>Hey there fellers</h1>
        {this.state.board}

        {this.state.players}
      </div>
    );
  }
}

export default Game;
