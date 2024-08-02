import { useState } from "react";
import "../../css/panel_list_vertical.scss"
import "./enemy_spawner.scss"
import TileList from "./TileList"
import { Tile } from "../../entities/tile";
import { Mission } from "../../entities/mission";

export type CurrentlySelecting = "mission" | "tile"

function EnemySpawner() {
  const [currentlySelecting, setCurrentlySelecting] = useState<CurrentlySelecting>("mission");
  const [selectedMission, setSelectedMission] = useState<Mission>();
  const [selectedTile, setSelectedTile] = useState<Tile>();
  
  const handlePanelListBackClick = () => {
    setSelectedMission(undefined)
    setCurrentlySelecting("mission")
  }

  const handleChildMissionClick = (item: Mission): void => {
    setSelectedMission(item);
    setCurrentlySelecting("tile")
  };

  const handleChildTileClick = (item: Tile): void => {
    setSelectedTile(item);
  };

  const switchPanelList = () => {
    switch (currentlySelecting) {
      case "mission":
        return <TileList currentlySelecting="mission" selectedMission={selectedMission} onClick={handleChildMissionClick} onClickBack={() => {}}></TileList>
      case "tile":
        return <TileList currentlySelecting="tile" selectedMission={selectedMission} onClick={handleChildTileClick} onClickBack={handlePanelListBackClick}></TileList>
    }
  }


  return (
      <div className="enemy-spawner">
        <div className="top bg-black clr-hotpink">
            FLATLINE - Enemy Spawner
        </div>
        <div className="bottom bg-black">
          <div className="left bg-darkpurple">
            {switchPanelList()}
          </div>
          <div className="right bg-black">
            Selected Mission: {selectedMission?.name}<br/>
            Selected Tile: {selectedTile?.getFullName()}
            
          </div>
        </div>

      </div>
  )
}

export default EnemySpawner
