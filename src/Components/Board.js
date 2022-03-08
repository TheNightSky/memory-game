import React from "react";
import { BoardWrapper } from "../assets/styles/wrappers/BoardWrapper";
import Tile from "./Tile";

const Board = ({ settings, board, handleClick }) => {
  return (
    <BoardWrapper size={parseInt(settings.gridSize)}>
      {board.map((tile) => {
        return (
          <Tile
            size={parseInt(settings.gridSize)}
            val={tile.val}
            id={tile.id}
            iconType={settings.theme}
            status={tile.status}
            activate={() => handleClick(tile.id)}
            key={tile.id}
          />
        );
      })}
    </BoardWrapper>
  );
};
export default Board;
