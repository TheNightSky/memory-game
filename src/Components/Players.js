import Player from "./Player";
import { PanelWrapper } from "../assets/styles/wrappers/PanelWrapper.styles";
const Players = ({ players, activePlayer, isWinner }) => {
  return (
    <PanelWrapper>
      {players.map((player) => {
        return (
          <Player
            numPlayers={players.length}
            isWinner={isWinner === player.id ? true : false}
            moves={player.moves}
            points={player.points}
            status={activePlayer === player.id ? "active" : null}
            id={player.id}
            key={player.id}
          />
        );
      })}
    </PanelWrapper>
  );
};

export default Players;
