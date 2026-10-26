import { NavLink } from "react-router";
import "./card.css"


export function Card({product}) {

    const id = product.id; 
    const title = product.title;
    const price =product.price ;
    const image = product.image;
     
    return (
        <NavLink  to="/card_extended" state={{index: id}} className="card">
            <h3>{title}</h3>
            <div className="quick-views">
                <img src={image} alt={`picture ${id}`} />
                <span>Price {price} €</span>
                <span className="card-id">{id}</span>
            </div>
        </NavLink>
    )
}