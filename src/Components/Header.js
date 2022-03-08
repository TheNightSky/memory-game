import { Button } from "../assets/styles/Button.styles";
import { HeaderWrapper } from "../assets/styles/wrappers/HeaderWrapper.styles";

export const Header = ({ restartGame, newGame }) => {
  return (
    <HeaderWrapper>
      <span>memory</span>
      <div>
        <Button isHighlighted onClick={() => restartGame()}>
          Restart
        </Button>
        <Button hasDarkFont onClick={() => newGame()}>
          New Game
        </Button>
      </div>
    </HeaderWrapper>
  );
};
