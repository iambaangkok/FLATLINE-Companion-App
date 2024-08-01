import { TILE_NAMES } from "../../constants/constants"
import "../../css/panel_list_vertical.scss"
import "./enemy_spawner.scss"



function TileList() {

  return (
    <div className="panel-list-vertical">
        {TILE_NAMES.map((tileName) => {
           return <div>{tileName}</div> 
        })}
    </div>
  )
}

export default TileList
