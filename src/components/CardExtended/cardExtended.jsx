import { useContext } from "react"
import { BackpackContext } from "../../context/BackpackContext"
import { Link, useLocation } from "react-router"
import { changeAmount } from "../../utils/changeAmount";
import { enterAmount } from "../../utils/enterAmount";

export function CardExtended({ currentOrder, setCurrentOrder }) {
    
    console.log("CardExtended VOR IndexOrderToChange ", currentOrder)

    const { loadedBackpackInfo } = useContext(BackpackContext);
    const location = useLocation();
    const index = location.state.index;
    const details = loadedBackpackInfo[index];
    let IndexOrderToChange = currentOrder.findIndex(backpack => backpack.id === index);

    console.log("CardExtended   CURRENTORDER ", currentOrder    )

    return (
        <>
            <h1>CART EXTENDED</h1>
            <div>
                <h2>{details.title}</h2>
                <div>
                    <img src={details.img} alt={`Backpack ${details.id}`} />
                    <p>
                        <span>Description:  </span>{details.description}
                    </p>
                </div>
                <p>
                    <span>Comoposition:  </span>{details.features.composition}
                </p>
                <p>
                    <span>Design:  </span>{details.features.design}
                </p>
                <p>
                    <span>Price:  </span>{details.price}
                </p>
                <p>
                    <span>Color:  </span>{details.features.color}
                </p>
                <p className="amount-section">
                    <button className="amount-btn" onClick={() => { changeAmount("+", details, IndexOrderToChange, currentOrder, setCurrentOrder) }}>+</button>
                    <input type="text" name="amount" id="amount"
                        value={IndexOrderToChange === -1 ? 0 : currentOrder[IndexOrderToChange].amount}
                        onChange={e => enterAmount(e.target.value, details, IndexOrderToChange, currentOrder, setCurrentOrder)} />
                    <button className="amount-btn" onClick={() => { changeAmount("-", details, IndexOrderToChange, currentOrder, setCurrentOrder) }}>-</button>
                </p>
            </div>
            <Link to="/shop">Back</Link>
        </>
    )
}