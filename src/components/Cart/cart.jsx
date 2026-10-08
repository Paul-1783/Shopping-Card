import { CheckoutCard } from "../Checkout-Card/checkoutCard"

export function Cart({ currentOrder, setCurrentOrder }) {

    

    return (
        <>
            <h1>YOUR CART</h1>
            <div className="title-line"><span>Item</span>  <span>PRICE</span>  <span>QUANTITY</span>   <span>TOTAL</span></div>
            <hr />
            <div className="cart">{currentOrder.map(oneOrder => {
                <CheckoutCard oneOrder={oneOrder} setCurrentOrder={setCurrentOrder}></CheckoutCard>
            })}</div>
            <hr />
            <div className="final-price"><span>TOTAL</span> <span>PRICE TOTAL</span></div>
            <button type="button" className="checkBtn">CHECKOUT</button>
        </>
    )
}