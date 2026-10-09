import { CheckoutCard } from "../Checkout-Card/checkoutCard"
import "./cart.css"

export function Cart({ currentOrder, setCurrentOrder }) {

    console.log("Cart CURRENT ORDER ", currentOrder)

    return (
        <>
            <h1>YOUR CART</h1>
            <div className="title-line"><span>Item</span>  <span>PRICE</span>  <span>QUANTITY</span>   <span>TOTAL</span></div>
            <hr />
            <div className="cart">{currentOrder.map((oneOrder, index) => {
                console.log("Cart One ORDER", oneOrder);
                return <CheckoutCard key={oneOrder.id} oneOrder={oneOrder} setCurrentOrder={setCurrentOrder} currentOrder={currentOrder} IndexOrderToChange={index}></CheckoutCard>
            })}</div>
            <hr />
            <div className="final-price"><span>TOTAL</span> <span>PRICE TOTAL</span></div>
            <button type="button" className="checkBtn">CHECKOUT</button>
        </>
    )
}