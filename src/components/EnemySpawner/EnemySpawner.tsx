import "../../css/panel_list_vertical.scss"
import "./enemy_spawner.scss"
import TileList from "./TileList"

function EnemySpawner() {

  return (
      <div className="enemy-spawner">
        <div className="left bg-mediumpurple">
          <TileList></TileList>
        </div>
        <div className="right bg-black">
          BB
        </div>
      </div>
  )
}

export default EnemySpawner
