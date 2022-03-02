import React, { Component } from "react";
import { generateRandomBoard, setUpPlayers } from "./helpers";
import Tile from "./Tile";
import Player from "./Player";
import { GameWrapper } from "./GameWrapper";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTiles: [],
      players: [<Player key="1" />],
      timer: false,
      board: generateRandomBoard(parseInt(this.props.gridSize)),
    };
    this.buildBoard = this.buildBoard.bind(this);
    this.postMatchProcess = this.postMatchProcess.bind(this);
    this.revertStatus = this.revertStatus.bind(this);
  }

  componentDidUpdate() {
    if (this.state.selectedTiles.length === 2) {
      if (this.isMatch()) {
        setTimeout(() => this.postMatchProcess(), 700);
      } else {
        setTimeout(() => this.revertStatus(), 700);
      }
    }
  }

  //prematching

  changeTileStatus(id) {
    let activeTile;
    const board = this.state.board.map((tile) => {
      if (
        tile.id === id &&
        tile.status !== "matched" &&
        tile.status != "active"
      ) {
        tile.status = "active";
        activeTile = tile;

        return tile;
      }
      return tile;
    });
    this.setState({
      board: [...board],
      selectedTiles: [...this.state.selectedTiles, activeTile],
    });
  }

  //matching
  isMatch() {
    const currTiles = this.state.selectedTiles;
    console.log(currTiles[0].val);
    if (currTiles[0].val === currTiles[1].val) return true;
    return false;
  }

  //postmatching
  postMatchProcess() {
    const board = this.state.board.map((tile) => {
      if (tile.status === "active") {
        tile.status = "matched";
        return tile;
      }
      return tile;
    });
    this.setState({
      board: [...board],
      selectedTiles: [],
    });
  }

  revertStatus() {
    const board = this.state.board;
    for (let tile of board) {
      if (tile.status === "active") {
        tile.status = null;
      }
    }

    this.setState({ board: [...board], selectedTiles: [] });
  }

  buildBoard(arr) {
    const board = [];
    for (let i = 0; i < arr.length; i++) {
      board.push(
        <Tile
          val={arr[i].val}
          id={arr[i].id}
          iconType={"icons"}
          status={arr[i].status}
          activate={
            this.state.selectedTiles.length === 2
              ? null
              : () => this.changeTileStatus(arr[i].id)
          }
          key={i}
        />
      );
    }
    return board;
  }

  render() {
    const board = this.buildBoard(this.state.board);
    return (
      <div>
        <h1>Hey there fellers</h1>
        <GameWrapper size={this.props.gridSize}>{board}</GameWrapper>

        {this.state.players}
      </div>
    );
  }
}

export default Game;
