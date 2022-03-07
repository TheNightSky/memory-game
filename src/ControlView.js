import { Button } from "./Buttons.styles";
import {
  Wrapper,
  ControlViewWrapper,
  ButtonsRow,
} from "./ControlWrapper.styles";

const ControlView = ({ settings, handleClick, createGame }) => {
  const { numPlayers, gridSize, theme } = settings;

  return (
    <Wrapper>
      <h1>Memory Game</h1>
      <ControlViewWrapper>
        <h4>Theme</h4>
        <ButtonsRow>
          <Button
            selected={theme === "numbers"}
            name={"theme"}
            value={"numbers"}
            onClick={(evt) => handleClick(evt)}
          >
            numbers
          </Button>
          <Button
            selected={theme === "icons"}
            name={"theme"}
            value={"icons"}
            onClick={(evt) => handleClick(evt)}
          >
            icons
          </Button>
        </ButtonsRow>
        <h4>Number of Players</h4>
        <ButtonsRow>
          <Button
            selected={numPlayers === "1"}
            name={"numPlayers"}
            value={"1"}
            onClick={(evt) => handleClick(evt)}
          >
            1
          </Button>
          <Button
            selected={numPlayers === "2"}
            name={"numPlayers"}
            value={"2"}
            onClick={(evt) => handleClick(evt)}
          >
            2
          </Button>
          <Button
            selected={numPlayers === "3"}
            name={"numPlayers"}
            value={"3"}
            onClick={(evt) => handleClick(evt)}
          >
            3
          </Button>
          <Button
            selected={numPlayers === "4"}
            name={"numPlayers"}
            value={"4"}
            onClick={(evt) => handleClick(evt)}
          >
            4
          </Button>
        </ButtonsRow>
        <h4>Grid Size</h4>
        <ButtonsRow>
          <Button
            selected={gridSize === "4"}
            name={"gridSize"}
            value={"4"}
            onClick={(evt) => handleClick(evt)}
          >
            4x4
          </Button>
          <Button
            selected={gridSize === "6"}
            name={"gridSize"}
            value={"6"}
            onClick={(evt) => handleClick(evt)}
          >
            6x6
          </Button>
        </ButtonsRow>

        <ButtonsRow>
          <Button isBig isHighlighted onClick={() => createGame()}>
            Start Game
          </Button>
        </ButtonsRow>
      </ControlViewWrapper>
    </Wrapper>
  );
};

export default ControlView;
