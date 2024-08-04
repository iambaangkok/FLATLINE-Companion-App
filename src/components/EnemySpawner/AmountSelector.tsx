import "../../css/panel_list_vertical.scss"
import "../../css/paddings.scss"
import "./amount_selector.scss"
import "../../css/buttons/glowbutton.scss"


type AmountSelectorProps = {
  onClick: (amount: number) => void
  currentAmount: number
}

// const MAX_SPAWN_AMOUNT: number = 16;

function AmountSelector({onClick, currentAmount}: AmountSelectorProps) {

    const buttons = () => {
        return [8,9,10,11,12,13,14,15,
          0,1,2,3,4,5,6,7
        ].map((i) => {
            const addiClsName = currentAmount==i? "glow":"";

            return <div
            className={"bg-hotpink btn-glow" + " " + addiClsName}
            onClick={() => onClick(i)}>
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
