import { Link } from "react-router";
import "./navbar.css"

export function Navbar({currentOrder}) {
    return <div className="navbar">
                <h1>PAWNSHOP</h1>
                <div className="nav-links">
                    <Link className="nav-btn" to="/">HOME</Link>
                    <br/>
                    <Link className="nav-btn" to="/shop">SHOP</Link>
                    <br/>
                    <Link className="nav-btn" to="/cart">CHECKOUT</Link>
                    <br/>
                    <Link className="nav-btn" to="/about">ABOUT</Link>
                </div>
                <div className="cart-section">
                    <span>{currentOrder ? 
                        currentOrder.reduce((acc, entry) => acc + entry.amount, 0) : 0}
                    </span>   
                    <img src="./public/assets/shopping-cart.jpg" alt="icon of a shopping cart" id="cart-img" />
                </div>
            </div>
}