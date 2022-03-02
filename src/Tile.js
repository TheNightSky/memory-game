import React, { Component, useState } from "react";
import { icons } from "./icons";
import TileWrapper from "./TileWrapper";
// const Tile = (props) => {
//   const [status, setStatus] = useState("");

//   const handleState = () => {
//     setStatus(status.concat("active"));
//     props.activate();
//   };

//   return (
//     <div onClick={handleState}>
//       <i className={`fak fa-${icons[props.val]}`}></i>
//     </div>
//   );
// };

// export default Tile;

class Tile extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.renderIcon = this.renderIcon.bind(this);
  }

  handleClick(evt) {
    if (this.props.status === null) {
      this.props.activate();
    }
  }

  renderIcon() {
    if (this.props.status === "active" || this.props.status === "guessed") {
      return <i className={`fak fa-${icons[this.props.val]}`}></i>;
    } else {
      return <div>h</div>;
    }
  }
  render() {
    const cardFace = this.renderIcon();
    return (
      <TileWrapper status={this.props.status} onClick={this.handleClick}>
        {cardFace}
      </TileWrapper>
    );
  }
}
export default Tile;
