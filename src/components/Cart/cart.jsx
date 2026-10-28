import { CheckoutCard } from "../Checkout-Card/checkoutCard"
import "./cart.css"

export function Cart({ currentOrder, setCurrentOrder }) {

    console.log("currentOrder   ", currentOrder)

    const totalPrice = currentOrder.reduce((accumulator, currentValue) => accumulator + (currentValue.amount * currentValue.price), 0)

    console.log("totalPrice ",totalPrice)
    return (
        <>
            <h1>YOUR CART</h1>
            <h3 className="title-line">YOUR ORDER:</h3>
            <div className="cart">{currentOrder.map((oneOrder, index) => {
                return <CheckoutCard key={oneOrder.id}
                    oneOrder={oneOrder} setCurrentOrder={setCurrentOrder} currentOrder={currentOrder} IndexOrderToChange={index}>
                </CheckoutCard>
            })}</div>
            <div className="checkout-finalize-container">
               <div className="final-price">TOTAL PRICE: {totalPrice}  €</div>
                <button type="button" className="checkout-btn">CHECKOUT</button>
            </div>
        </>
    )
}