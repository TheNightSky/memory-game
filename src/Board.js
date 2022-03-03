import React from "react";
import { BoardWrapper } from "./BoardWrapper";
import Tile from "./Tile";

const Board = ({ settings, board, handleClick }) => {
  return (
    <BoardWrapper size={parseInt(settings.gridSize)}>
      {board.map((tile) => {
        return (
          <Tile
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
