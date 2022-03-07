import Players from "./Players";
import { PlayerWrapper } from "./PlayerWrapper.styles";

const Player = ({ id, numPlayers, moves, points, status, isWinner }) => {
  if (numPlayers === 1) {
    return (
      <div>
        <PlayerWrapper status={false} isWinner={isWinner}>
          <span>Moves</span>
          <span>{moves}</span>
        </PlayerWrapper>
      </div>
    );
  } else {
    return (
      <PlayerWrapper status={status} isWinner={isWinner}>
        <span>Player {id + 1}</span>
        <span>{points}</span>
      </PlayerWrapper>
    );
  }
};

export default Player;
