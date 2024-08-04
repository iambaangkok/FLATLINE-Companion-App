import { useState } from "react";
import "../../css/panel_list_vertical.scss"
import "./enemy_spawner.scss"
import TileList from "./TileList"
import { Tile } from "../../entities/tile";
import { Mission } from "../../entities/mission";
import AmountSelector from "./AmountSelector";
import TileImageDisplay from "./TileImageDisplay";


export type CurrentlySelecting = "mission" | "tile"

function EnemySpawner() {
  const [currentlySelecting, setCurrentlySelecting] = useState<CurrentlySelecting>("mission");
  const [selectedMission, setSelectedMission] = useState<Mission>();
  const [selectedTile, setSelectedTile] = useState<Tile>();
  const [selectedAmount, setSelectedAmount] = useState<number>(0);
  const [clickTime, setClickTime] = useState<number>(Date.now());
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
    setSelectedAmount(0);
  };

  const spawn = (amount: number): void => {
    setSelectedAmount(amount);
    setClickTime(Date.now());
  }

  const switchPanelList = () => {
    switch (currentlySelecting) {
      case "mission":
        return <TileList currentlySelecting="mission" selectedMission={selectedMission} selectedTile={selectedTile} onClick={handleChildMissionClick} onClickBack={() => {}}></TileList>
      case "tile":
        return <TileList currentlySelecting="tile" selectedMission={selectedMission} selectedTile={selectedTile} onClick={handleChildTileClick} onClickBack={handlePanelListBackClick}></TileList>
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
            {/* Selected Tile: {selectedTile?.getFullName()} */}
            <AmountSelector onClick={spawn} currentAmount={selectedAmount}></AmountSelector>
            {/* Spawn Amount: {selectedAmount} */}
            <TileImageDisplay tile={selectedTile} amount={selectedAmount} clickTime={clickTime} ></TileImageDisplay>
          </div>
        </div>

      </div>
  )
}

export default EnemySpawner
