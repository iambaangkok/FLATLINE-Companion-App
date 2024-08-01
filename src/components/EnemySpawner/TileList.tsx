import { getSortedTilesBySize, Tile, TILES } from "../../entities/tiles"
import "../../css/panel_list_vertical.scss"
import "./enemy_spawner.scss"
import "../../css/buttons/glowbutton.scss"

const tiles = getSortedTilesBySize(TILES)

type TileListProps = {
    onClick: (tile: Tile) => void
}

function TileList({onClick}: TileListProps) {

  return (
    <div className="panel-list-vertical">
        {tiles.map((tile) => {
           return <div className="btn-glow" onClick={() => onClick(tile)}>
                {tile.getFullName()}
            </div> 
        })}
    </div>
  )
}

export default TileList
