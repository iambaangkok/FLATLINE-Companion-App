import "../../css/panel_list_vertical.scss"
import "../../css/paddings.scss"
import "./tile_image_display.scss"
import "../../css/buttons/glowbutton.scss"
import { TileI } from "../../entities/tile"
import { useEffect, useRef, useState } from "react"
import { randInt } from "../../utils/randomutil"


type TileImageDisplayProps = {
  tile: TileI | undefined
  amount: number
  clickTime: number
}

function TileImageDisplay({tile, amount, clickTime}: TileImageDisplayProps) {

  const ref = useRef<HTMLImageElement>(document.createElement("img"));
  const [imgX, setImgX] = useState<number>(0);
  const [imgY, setImgY] = useState<number>(0);
  const [imgWidth, setImgWidth] = useState<number>(0);
  const [imgHeight, setImgHeight] = useState<number>(0);

  useEffect(() => {
    const getXYWH = () => {
      setImgX(ref.current.offsetLeft);
      setImgY(ref.current.offsetTop);
      setImgWidth(ref.current.offsetWidth);
      setImgHeight(ref.current.offsetHeight);
    }
    getXYWH()
    window.addEventListener("", getXYWH);
    return () => window.removeEventListener("", getXYWH);
  }, [tile, amount, clickTime])


  const getSpawnPoints = () => {
    return [...Array(amount).keys()].map((i) => {
      const spawnPointSize = 22;
      const x = randInt(imgX, imgX + imgWidth - spawnPointSize);
      const y = randInt(imgY, imgY + imgHeight - spawnPointSize);


      return  <div className="spawn-point bg-red clr-black"
      style={{
        left: x,
        top: y,
      }}>
          {i+1}
      </div>
    })
  }
  
  let aspectRatio: number = 1;

  if (tile == undefined) {
    aspectRatio = 1
  }else {
    aspectRatio = tile.width / tile.height;
  }
  

  return (
    <div className="tile-image-display-container pd-40 bg-white">
        <div
        className="tile-image-container2" >
          <img 
          ref={ref}
          src={tile?.image}
          className=""
          style={{
            aspectRatio: aspectRatio,
          }}>
          </img>
        </div>
        {getSpawnPoints()}
    </div>
  )
}

export default TileImageDisplay
