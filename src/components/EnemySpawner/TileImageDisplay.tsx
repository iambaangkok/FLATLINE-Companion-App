import "../../css/panel_list_vertical.scss"
import "../../css/paddings.scss"
import "./tile_image_display.scss"
import "../../css/buttons/glowbutton.scss"
import { TileI } from "../../entities/tile"


type TileImageDisplayProps = {
  tile: TileI | undefined
  amount: number
}

function TileImageDisplay({tile}: TileImageDisplayProps) {
  
  let aspectRatio: number = 1;

  if (tile == undefined) {
    aspectRatio = 1
  }else {
    aspectRatio = tile.width / tile.height;
  }
  

  return (
    <div className="tile-image-display-container pd-40 bg-white">
        <div>
          <img 
          src={tile?.image}
          className=""
          style={{
            aspectRatio: aspectRatio,
          }}>
          </img>
        </div>
    </div>
  )
}

export default TileImageDisplay
