import React, { useState } from "react";
import { theme } from "./theme";
import { Button } from "./Buttons.styles";

const Menu = () => {
  const [settings, setSettings] = useState({
    theme: "numbers",
    numPlayers: 1,
    gridSize: 4,
  });
  const { theme, numPlayers, gridSize } = settings;

  const handleSettingChange = (setting, newValue) => {
    setSettings({
      ...settings,
      [setting]: newValue,
    });
  };
  const [isDurringGame, setIsDurringGame] = useState(false);

  return (
    <div>
      <div>
        <Button
          selected={theme === "numbers"}
          onClick={() => handleSettingChange("theme", "numbers")}
        >
          numbers
        </Button>

        <Button
          selected={theme === "icons"}
          onClick={() => handleSettingChange("theme", "icons")}
        >
          icons
        </Button>
      </div>
      <div>
        <Button
          selected={numPlayers === "1"}
          onClick={() => handleSettingChange("numPlayers", "1")}
        >
          1
        </Button>
        <Button
          selected={numPlayers === "2"}
          onClick={() => handleSettingChange("numPlayers", "2")}
        >
          2
        </Button>
        <Button
          selected={numPlayers === "3"}
          onClick={() => handleSettingChange("numPlayers", "3")}
        >
          3
        </Button>
        <Button
          selected={numPlayers === "4"}
          onClick={() => handleSettingChange("numPlayers", "4")}
        >
          4
        </Button>
      </div>
      <div>
        <Button
          selected={gridSize === "4"}
          onClick={() => handleSettingChange("gridSize", "4")}
        >
          4x4
        </Button>
        <Button
          selected={numPlayers === "6"}
          onClick={() => handleSettingChange("gridSize", "6")}
        >
          6x6
        </Button>
      </div>
      <Button isDistinguish>Start Game</Button>
    </div>
  );
};

export default Menu;
