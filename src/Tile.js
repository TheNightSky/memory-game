import React, { Component, useState } from "react";
import { icons } from "./icons";
import { TileWrapper } from "./Tile.styles";

const Tile = ({ id, val, status, activate, iconType }) => {
  let tileValue;
  if (status === "matched" || status === "active") {
    switch (iconType) {
      case "icons": {
        tileValue = (
          <div>
            <i className={`fak fa-${icons[val]}`}></i>
          </div>
        );
        break;
      }
      default: {
        console.log(tileValue);
        tileValue = val;
        break;
      }
    }
  }

  return (
    <TileWrapper
      key={id}
      status={status}
      onClick={!status ? () => activate(id) : null}
    >
      {tileValue}
    </TileWrapper>
  );
};
export default Tile;
