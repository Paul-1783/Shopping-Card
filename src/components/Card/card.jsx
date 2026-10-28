import { NavLink } from "react-router";
import "./card.css"


export function Card({ product, rowClass }) {

    const id = product.id;
    const title = product.title;
    const price = product.price;
    const image = product.image;

    return (
        <NavLink to="/card_extended" state={{ index: id }} className={`card ` + `outer-` + rowClass}>
            <div className={rowClass}>
                <h3>{title}</h3>
                <div className="quick-views">
                    <img src={image} alt={`picture ${id}`}  className="row-image"/>
                    <span>Price {price} €</span>
                    <span className="card-id">{id}</span>
                </div>
            </div>
        </NavLink>
    )
}