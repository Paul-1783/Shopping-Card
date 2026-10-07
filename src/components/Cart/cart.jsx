
export function Cart() {
    return (
        <>
            <h1>YOUR CART</h1>
            <div className="title-line"><span>Item</span>  <span>PRICE</span>  <span>QUANTITY</span>   <span>TOTAL</span></div>
            <hr />
            <div className="cart"></div>
            <hr />
            <div className="final-price"><span>TOTAL</span> <span>PRICE TOTAL</span></div>
            <button type="button" className="checkBtn">CHECKOUT</button>
        </>
    )
}