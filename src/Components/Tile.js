import { icons } from "../assets/icons";
import { TileWrapper } from "./Tile.styles";

const Tile = ({ id, val, status, activate, iconType }) => {
  let tileValue;
  if (status === "matched" || status === "active") {
    if (iconType === "icons") {
      tileValue = (
        <div>
          <i className={`fak fa-${icons[val]}`}></i>
        </div>
      );
    } else {
      tileValue = val;
    }
  }

  return (
    <TileWrapper
      key={id}
      status={status}
      onClick={!status ? () => activate() : undefined}
    >
      {tileValue}
    </TileWrapper>
  );
};
export default Tile;
//
