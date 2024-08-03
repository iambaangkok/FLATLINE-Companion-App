import "../../css/panel_list_vertical.scss"
import "../../css/paddings.scss"
import "./amount_selector.scss"
import "../../css/buttons/glowbutton.scss"


type AmountSelectorProps = {
  onClick: (amount: number) => void
}

const MAX_SPAWN_AMOUNT: number = 16;


function AmountSelector({onClick}: AmountSelectorProps) {

    const buttons = () => {
        return [...Array(MAX_SPAWN_AMOUNT).keys()].map((i) => {
            return <div className="bg-hotpink btn-glow" onClick={() => onClick(i)}>
            {i}
            </div>
        })
    }

  return (
    <div className="amount-selector">
        {buttons()}
    </div>
  )
}

export default AmountSelector
