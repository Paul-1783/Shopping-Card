import { Link } from "react-router";

export function Navbar() {
    return <div className="navbar">
        <h1>PAWNSHOP</h1>
        <Link className="nav-btn" to="/">HOME</Link>
        <br/>
        <Link className="nav-btn" to="/shop">SHOP</Link>
        <br/>
        <Link className="nav-btn" to="/cart">CHECKOUT</Link>
        <br/>
        <Link className="nav-btn" to="/about">ABOUT</Link>
    </div>
}