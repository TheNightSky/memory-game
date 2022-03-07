import React, { Component } from "react";
import Board from "./Components/Board";
import { ViewWrapper } from "./ViewWrapper.styles";
import { generateRandomBoard, setUpPlayers } from "./helpers";
import Players from "./Components/Players";
import { Button } from "./Buttons.styles";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gamePause: false,
      gameStarted: false,
      timer: false,
      activePlayer: 0,
      activeTiles: [],
      players: setUpPlayers(parseInt(this.props.numPlayers)),
      board: generateRandomBoard(parseInt(this.props.gridSize)),
    };

    this.changeTileStatus = this.changeTileStatus.bind(this);
    this.isMatch = this.isMatch.bind(this);
    this.postMatchProcess = this.postMatchProcess.bind(this);
    this.revertStatus = this.revertStatus.bind(this);
  }

  componentDidUpdate() {
    if (this.state.activeTiles.length === 2) {
      if (this.isMatch()) {
        setTimeout(() => this.postMatchProcess(), 700);
      } else {
        setTimeout(() => this.revertStatus(), 700);
      }
    }
  }

  restartGame() {
    this.setState({
      players: setUpPlayers(parseInt(this.props.numPlayers)),
      board: generateRandomBoard(parseInt(this.props.gridSize)),
    });
  }

  newGame() {
    this.props.newGame(!this.props.gameStarted);
  }

  //prematching

  changeTileStatus(id) {
    if (this.state.activeTiles.length !== 2) {
      let activeTile;
      const board = this.state.board.map((tile) => {
        if (
          tile.id === id &&
          tile.status !== "matched" &&
          tile.status !== "active"
        ) {
          tile.status = "active";
          activeTile = tile;

          return tile;
        }
        return tile;
      });
      this.setState({
        board: [...board],
        activeTiles: [...this.state.activeTiles, activeTile],
      });
    }
  }

  //matching
  isMatch() {
    const currTiles = this.state.activeTiles;
    if (currTiles[0].val === currTiles[1].val) return true;
    return false;
  }

  //postmatching
  postMatchProcess() {
    const updateBoard = this.state.board.map((tile) => {
      if (tile.status === "active") {
        tile.status = "matched";
        return tile;
      }
      return tile;
    });

    const updatePlayers = this.state.players.map((player) => {
      if (player.id === this.state.activePlayer) {
        player.points += 1;
        player.moves += 1;
        return player;
      }
      return player;
    });

    this.setState({
      board: [...updateBoard],
      activeTiles: [],
      players: [...updatePlayers],
    });
  }

  revertStatus() {
    const board = this.state.board;
    for (let tile of board) {
      if (tile.status === "active") {
        tile.status = null;
      }
    }

    const updatePlayers = this.state.players.map((player) => {
      if (player.id === this.state.activePlayer) {
        player.moves += 1;
        player.status = null;
        return player;
      }
      return player;
    });

    this.setState((st) => ({
      board: [...board],
      activeTiles: [],
      players: [...updatePlayers],
      activePlayer: (st.activePlayer + 1) % updatePlayers.length,
    }));
  }

  render() {
    return (
      <div>
        <ViewWrapper>
          <Button isHighlighted onClick={() => this.restartGame()}>
            Restart
          </Button>
          <Button hasDarkFont onClick={() => this.newGame()}>
            New Game
          </Button>
        </ViewWrapper>

        <Board
          settings={this.props}
          board={this.state.board}
          handleClick={this.changeTileStatus}
          numActiveTiles={this.state.activeTiles.length}
        />
        <Players
          players={this.state.players}
          activePlayer={this.state.activePlayer}
          isWinner={null}
        />
      </div>
    );
  }
}

export default Game;
