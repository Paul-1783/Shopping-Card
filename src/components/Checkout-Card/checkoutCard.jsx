import { changeAmount } from "../../utils/changeAmount";
import { enterAmount } from "../../utils/enterAmount";
import { useLocation } from "react-router";
import { useContext } from "react";
import { BackpackContext } from "../../context/BackpackContext";

export function CheckoutCard({ currentOrder, setCurrentOrder }) {

    const { loadedBackpackInfo } = useContext(BackpackContext);
    const location = useLocation();
    const index = location.state.index;
    const details = loadedBackpackInfo[index];
    let IndexOrderToChange = currentOrder.findIndex(backpack => backpack.id === index);

    const id = currentOrder.id;
    const title = currentOrder.title;
    const price = currentOrder.price;
    const image = currentOrder.image;
    let amount = currentOrder.amount;

    return (
        <div className="checkoutCard">
            <span>{id}</span>
            <span>{title}</span>
            <span>{price}</span>
            <img src={image} alt={`picture ${id}`} />
            <p className="amount-section">
                <button className="amount-btn" onClick={() => { changeAmount("+", {id, title, price, image}, IndexOrderToChange, currentOrder, setCurrentOrder) }} >+</button>
                <input type="text" name="amount" id="amount"
                    value={IndexOrderToChange === -1 ? 0 : currentOrder[IndexOrderToChange].amount}
                    onChange={e => enterAmount(e.target.value, details, IndexOrderToChange, currentOrder, setCurrentOrder)} />
                <button className="amount-btn" onClick={() => { changeAmount("-", details, IndexOrderToChange, currentOrder, setCurrentOrder) }}>-</button>
            </p>
        </div>
    )
}