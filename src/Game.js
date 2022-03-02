import React, { Component } from "react";
import { generateRandomBoard, setUpPlayers } from "./helpers";
import Tile from "./Tile";
import Player from "./Player";

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
    //this.changeTileStatus = this.changeTileStatus.bind(this);
    // this.addTile = this.addTile.bind(this);
    // this.findActiveTile = this.findActiveTile.bind(this);
    // this.isMatch = this.isMatch.bind(this);
  }

  componentDidUpdate() {
    const tiles = this.state.selectedTiles;
    if (tiles.length === 2) {
      this.postMatchProcess();
    }
  }

  buildBoard(arr) {
    const board = [];
    for (let i = 0; i < arr.length; i++) {
      board.push(
        <Tile
          val={arr[i].val}
          id={arr[i].id}
          status={arr[i].status}
          activate={() => this.changeTileStatus(arr[i].id)}
          key={i}
        />
      );
    }
    return board;
  }

  //prematching

  changeTileStatus(id) {
    let activeTile;
    const board = this.state.board.map((tile) => {
      if (
        tile.id === id &&
        tile.status !== "matched" &&
        !(tile in this.state.selectedTiles)
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
    console.log(this.state.selectedTiles);
  }

  //matching
  isMatch() {
    const currTiles = this.state.selectedTiles;
    console.log(currTiles[0].value);
    if (currTiles[0].val === currTiles[1].val) return true;
    return false;
  }

  //postmatching
  postMatchProcess() {
    const stat = this.isMatch();
    console.log(stat);
    if (stat) {
      console.log("MATCH");
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
    } else {
      this.revertStatus();
    }
  }

  revertStatus() {
    const board = this.state.board.map((tile) => {
      if (tile.status === "active") {
        tile.status = null;
        return tile;
      }
      return tile;
    });

    this.setState({ board: [...board], selectedTiles: [] });
  }

  // addTile() {
  //   if (this.state.selectedTiles.length < 2) {
  //     this.setState((st) => ({
  //       selectedTiles: st.selectedTiles.push(this.findActiveTile()),
  //     }));
  //   }
  // }

  // findActiveTile() {
  //   const board = this.state.board;
  //   const [tile] = board.filter(
  //     (t) => t.status === "active" && ~(t in this.state.selectedTiles)
  //   );
  //   return tile;
  // }

  render() {
    const board = this.buildBoard(this.state.board);
    return (
      <div>
        <h1>Hey there fellers</h1>
        {board}

        {this.state.players}
      </div>
    );
  }
}

export default Game;
