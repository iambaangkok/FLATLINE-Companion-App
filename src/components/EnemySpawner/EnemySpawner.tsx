import { useState } from "react";
import "../../css/panel_list_vertical.scss"
import "./enemy_spawner.scss"
import TileList from "./TileList"
import { Tile } from "../../entities/tiles";

function EnemySpawner() {
  const [selectedTile, setSelectedTile] = useState<Tile>();

  const handleChildClick = (tile: Tile) => {
    setSelectedTile(tile);
  };


  return (
      <div className="enemy-spawner">
        <div className="top bg-black clr-hotpink">
            FLATLINE - Enemy Spawner
        </div>
        <div className="bottom bg-black">
          <div className="left bg-darkpurple">
            <TileList onClick={handleChildClick}></TileList>
          </div>
          <div className="right bg-black">
            Selected Tile: {selectedTile?.getFullName()}
          </div>
        </div>

      </div>
  )
}

export default EnemySpawner
