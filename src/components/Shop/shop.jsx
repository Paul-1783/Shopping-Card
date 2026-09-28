import { Searchbar } from "../Searchbar/searchbar.jsx"
import { CardExtended } from "../CardExtended/cardExtended.jsx";
import { Card } from "../Card/card.jsx";
import { useContext } from "react";
import { BackpackContext } from "../../context/BackpackContext.jsx";

export function Shop() {
    const searchTest = () => {}; //         ?

    const { loadedBackpackInfo } = useContext(BackpackContext)
            
    return (
        <>
            <Searchbar setRowView={searchTest} />
            <h1>SHOP</h1>
            <div data-testid="item-container" className="item-container">{loadedBackpackInfo.map(product => 
                <Card key={product.id} product={{"id": product.id, "title": product.title, "price": product.price, "image": product.img}} />)}
            </div>
        </>
    )
}