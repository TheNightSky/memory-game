import Player from "./Player";
import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
`;
const Players = ({ players, activePlayer, isWinner }) => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default Players;
