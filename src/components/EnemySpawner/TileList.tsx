import { getSortedTilesBySize, TileI } from "../../entities/tile"
import "../../css/panel_list_vertical.scss"
import "../../css/paddings.scss"
import "./enemy_spawner.scss"
import "../../css/buttons/glowbutton.scss"
import { CurrentlySelecting } from "./EnemySpawner"
import { MissionI, MISSIONS } from "../../entities/mission"

const missions = MISSIONS

type TileListProps = {
  currentlySelecting: CurrentlySelecting
  selectedMission: MissionI | undefined
  selectedTile: TileI | undefined
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: any
  onClickBack: () => void
}

function TileList({currentlySelecting, selectedMission, selectedTile, onClick, onClickBack}: TileListProps) {

  const tiles = selectedMission? getSortedTilesBySize([...selectedMission.tiles.keys()]) : []
  let title = "MISSIONS";
  let items = missions.map((mission) => {
    return <div className="btn-glow pd-10-35" onClick={() => onClick(mission)}>
         {mission.name}
     </div> 
   });

  switch (currentlySelecting) {
    case "mission": 
      break;
    case "tile":
      title = "TILES"
      items = tiles.map((tile) => {
        const addiClsName = selectedTile?.equals(tile) ? "glow":"";

        return <div
        className={"btn-glow pd-10-35" + " " + addiClsName}
        onClick={() => onClick(tile)}>
             {tile.getFullName()}
         </div> 
       })
  }

  return (
    <div className="panel-list-vertical">
        <div className="title-container">
          <div className="btn-glow pd-10-35" onClick={() => onClickBack()}>
            {"<"}
          </div>
          <div className="title">
            {title}
          </div>
        </div>
        <div className="item-container">
          {items}
        </div>
    </div>
  )
}

export default TileList
