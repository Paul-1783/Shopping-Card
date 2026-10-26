import { useContext } from "react"
import { BackpackContext } from "../../context/BackpackContext"
import { Link, useLocation } from "react-router"
import { changeAmount } from "../../utils/changeAmount";
import { enterAmount } from "../../utils/enterAmount";
import "./cardExtended.css"

export function CardExtended({ currentOrder, setCurrentOrder }) {

    const { loadedBackpackInfo } = useContext(BackpackContext);
    const location = useLocation();
    const index = location.state.index;
    const details = loadedBackpackInfo[index];
    let IndexOrderToChange = currentOrder.findIndex(backpack => backpack.id === index);

    return (
        <div className="card-ext-container">
            <div className="card-extended">
                <div>
                    <h1>BACKPACK SPECS</h1>
                    <h2>"{details.title}"</h2>
                    <div className="backpack-details">
                        <img src={details.img} alt={`Backpack ${details.id}`} />
                        <div>
                            <p>
                                <span>Description:  </span>{details.description}
                            </p>

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
                                <button className="btn amount-btn" onClick={() => { changeAmount("+", details, IndexOrderToChange, currentOrder, setCurrentOrder) }}>+</button>
                                <input type="text" name="amount" id="amount"
                                    value={IndexOrderToChange === -1 ? 0 : currentOrder[IndexOrderToChange].amount}
                                    onChange={e => enterAmount(e.target.value, details, IndexOrderToChange, currentOrder, setCurrentOrder)} />
                                <button className="btn amount-btn" onClick={() => { changeAmount("-", details, IndexOrderToChange, currentOrder, setCurrentOrder) }}>-</button>
                            </p>
                        </div>
                    </div>
                </div>
                <Link to="/shop">Back to the Shop</Link>
            </div>
        </div>
    )
}