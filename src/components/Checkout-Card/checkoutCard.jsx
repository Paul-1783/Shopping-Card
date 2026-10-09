import { changeAmount } from "../../utils/changeAmount";
import { enterAmount } from "../../utils/enterAmount";
import "./checkoutCard.css"

export function CheckoutCard({ currentOrder, setCurrentOrder, IndexOrderToChange, oneOrder }) {
    
    console.log("CheckoutCard   ONE ORDER  ", oneOrder)

    const id = oneOrder.id;
    const title = oneOrder.title;
    const price = oneOrder.price;
    const image = oneOrder.image;
 
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
                    onChange={e => enterAmount(e.target.value, oneOrder, IndexOrderToChange, currentOrder, setCurrentOrder)} />
                <button className="amount-btn" onClick={() => { changeAmount("-", oneOrder, IndexOrderToChange, currentOrder, setCurrentOrder) }}>-</button>
            </p>
        </div>
    )
}