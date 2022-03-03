import React, { Component } from "react";
import Game from "./Game";
import RadioButton from "./RadioButton";

// class BuildGame extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       numPlayers: 1,
//       gridSize: 4,
//       theme: "nums",
//       gameStarted: false,
//     };
//     this.createGame.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(evt) {
//     this.setState({ [evt.target.name]: evt.target.value });
//   }

//   createGame() {
//     this.setState({ gameStarted: !this.state.gameStarted });
//   }

//   handleSubmit(evt) {
//     evt.preventDefault();
//     this.createGame();
//   }

//   render() {
//     if (!this.state.gameStarted) {
//       return (
//         <div>
//           <form onSubmit={this.handleSubmit}>
//             <input type="button"></input>
//           </form>

//           <form onSubmit={this.handleSubmit}>
//             <div>
//               <RadioButton
//                 type="radio"
//                 name="theme"
//                 value="nums"
//                 //checked={select === "optionB"}
//                 onChange={this.handleChange}
//               />

//               <input
//                 type="radio"
//                 id="num"
//                 name="theme"
//                 value="nums"
//                 onChange={this.handleChange}
//               />
//               <label htmlFor="num">num</label>

//               <input
//                 type="radio"
//                 id="icon"
//                 name="theme"
//                 value="icons"
//                 onChange={this.handleChange}
//               />
//               <label htmlFor="icon">icon</label>
//             </div>

//             <div>
//               <input
//                 type="radio"
//                 id="1"
//                 name="numPlayers"
//                 value="1"
//                 onChange={this.handleChange}
//               />
//               <label htmlFor="1">1</label>
//               <input
//                 type="radio"
//                 id="2"
//                 name="numPlayers"
//                 value="2"
//                 onChange={this.handleChange}
//               />
//               <label htmlFor="2">2</label>
//               <input
//                 type="radio"
//                 id="3"
//                 name="numPlayers"
//                 value="3"
//                 onChange={this.handleChange}
//               />
//               <label htmlFor="3">3</label>
//               <input
//                 type="radio"
//                 id="4"
//                 name="numPlayers"
//                 value="4"
//                 onChange={this.handleChange}
//               />
//               <label htmlFor="4">4</label>
//             </div>

//             <div>
//               <input
//                 type="radio"
//                 id="4x4"
//                 name="gridSize"
//                 value="4"
//                 onChange={this.handleChange}
//               />
//               <label htmlFor="4x4">4x4</label>
//               <input
//                 type="radio"
//                 id="6x6"
//                 name="gridSize"
//                 value="6"
//                 onChange={this.handleChange}
//               />
//               <label htmlFor="6x6">6x6</label>
//             </div>

//             <button>Start Game</button>
//           </form>
//         </div>
//       );
//     } else {
//       return (
//         <Game
//           key="1"
//           numPlayers={this.state.numPlayers}
//           gridSize={this.state.gridSize}
//           theme={this.state.theme}
//           newGame={this.createGame}
//         />
//       );
//     }
//   }
// }

// export default BuildGame;
