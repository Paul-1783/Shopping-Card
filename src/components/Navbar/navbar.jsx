import { Link } from "react-router";

export function Navbar() {
    return <div className="navbar">
        <h1>PAWNSHOP</h1>
        <Link className="nav-btn" to="./../Home/home">HOME</Link>
        <Link className="nav-btn" to="./../Shop/shop">SHOP</Link>
        <Link className="nav-btn" to="./../Checkout/checkout">CHECKOUT</Link>
    </div>
}