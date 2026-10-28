import { changeAmount } from "../../utils/changeAmount";
import { enterAmount } from "../../utils/enterAmount";
import "./checkoutCard.css"

export function CheckoutCard({ currentOrder, setCurrentOrder, IndexOrderToChange, oneOrder }) {

    const id = oneOrder.id;
    const title = oneOrder.title;
    const price = oneOrder.price;
    const image = oneOrder.img;

    const currentUnits = IndexOrderToChange === -1 ? 0 : currentOrder[IndexOrderToChange].amount;

    return (
        <div className="checkoutCard">
            <img src={image} alt={`picture ${id}`} />
            <h4>{title}</h4>
            <div className="order-details">
                <span>{currentUnits} units</span>
                <span>{price} € each</span>
                <span>{currentUnits * price} € Price Total</span>
                <p className="checkout-amount-section">
                    <button className="amount-btn btn"
                        onClick={() => {
                            changeAmount("+", { id, title, price, image },
                                IndexOrderToChange, currentOrder, setCurrentOrder)
                        }}
                    >+</button>
                    <input type="text" name="amount" id="amount"
                        value={currentUnits}
                        onChange={e => enterAmount(e.target.value, { id, title, price, image }, IndexOrderToChange, currentOrder, setCurrentOrder)} />
                    <button className="amount-btn btn"
                        onClick={() => {
                            changeAmount("-", { id, title, price, image },
                                IndexOrderToChange, currentOrder, setCurrentOrder)
                        }}
                    >-</button>
                </p>
            </div>
        </div>
    )
}