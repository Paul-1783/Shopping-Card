import { NavLink } from "react-router";

export function Card({product}) {

    const id = product.id; 
    const title = product.title;
    const price =product.price ;
    const image= product.image;
     

 
    return (
        <NavLink  to="/card_extended" state={{index: id}}>
            <span>{id}</span>
            <h3>{title}</h3>
            <div>
                <h4>{price}</h4>
                <img src={image} alt={`picture ${id}`} />
            </div>
        </NavLink>
    )
}