import { PlayerWrapper } from "./PlayerWrapper.styles";

const Player = ({ id, moves, points, status, isWinner }) => {
  return (
    <PlayerWrapper status={status} isWinner={isWinner}>
      Player <span>{id + 1}</span>
      <span>{points}</span>
    </PlayerWrapper>
  );
};

export default Player;