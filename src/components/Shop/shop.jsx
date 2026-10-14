import { Searchbar } from "../Searchbar/searchbar.jsx"
import { Card } from "../Card/card.jsx";
import { useContext, useState } from "react";
import { BackpackContext } from "../../context/BackpackContext.jsx";
import "./shop.css";

export function Shop() {
    const { loadedBackpackInfo } = useContext(BackpackContext);
    const [extension, setExtension] = useState("grid-view");
    const [searchInput, setSearchInput] = useState({searchTerm : "", backpackType: "", criteria: ""});

    
    function handleExtensionView (decide)  {
        if(decide === false)
            setExtension("grid-view");
        else 
            setExtension("row-view");
    };

    let foundItems = loadedBackpackInfo
        // .map(backPack => {searchInput.backpackType !== "" && backPack.backpackType === searchInput.backpackType})
        // .map(backPack => searchInput.criteria !== "" && backPack.backpackType === searchInput.backpackType)
        .map(backpack => {
            if(backpack.title.search(searchInput.searchTerm) !== -1)
                return backpack;
        });
 
        // console.log("FOUND ITEMS:   ", foundItems)

    return (
        <>
            <Searchbar handleExtensionView={handleExtensionView}  setSearchInput={setSearchInput} searchInput={searchInput} />
            <h1>SHOP</h1>
            <div data-testid="item-container" className="item-container">{foundItems.map(product =>
                <Card key={product.id} className={extension}
                product={{ "id": product.id, "title": product.title, "price": product.price, "image": product.img }} />
            )}
            </div>
        </>
    )
}