import { Link } from "react-router";

export function Navbar({currentOrder}) {
    return <div className="navbar">
        <h1>PAWNSHOP</h1>
        <div>
        <Link className="nav-btn" to="/">HOME</Link>
        <br/>
        <Link className="nav-btn" to="/shop">SHOP</Link>
        <br/>
        <Link className="nav-btn" to="/cart">CHECKOUT</Link>
        <br/>
        <Link className="nav-btn" to="/about">ABOUT</Link>
        </div>
        <div><span>{currentOrder}</span>    <img src="./public/assets/shopping-cart.jpg" alt="icon of a shopping cart" /></div>
    </div>
}