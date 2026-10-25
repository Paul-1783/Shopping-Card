import { Searchbar } from "../Searchbar/searchbar.jsx"
import { Card } from "../Card/card.jsx";
import { useContext, useState } from "react";
import { BackpackContext } from "../../context/BackpackContext.jsx";
import "./shop.css";

export function Shop() {
    const { loadedBackpackInfo } = useContext(BackpackContext);
    const [extension, setExtension] = useState("grid-view");
    const [searchInput, setSearchInput] = useState({searchTerm : "", backpackType: "", criteria: ""});
    const [backpackType, setBackpackType] = useState("");
    const [criteria, setCriteria] = useState("");

    function handleExtensionView (decide)  {
        if(decide === false)
            setExtension("grid-view");
        else
            setExtension("row-view");
    }; 

    let foundBackPackFamily = backpackType === "" ? loadedBackpackInfo 
        : loadedBackpackInfo.filter(backPack => backPack.backpackType === backpackType)

    let criteriaPassedFamily = criteria === "" ? foundBackPackFamily 
        : foundBackPackFamily.filter(backPack =>  backPack.criteria === criteria)

    let foundItems = searchInput.searchTerm === "" ? criteriaPassedFamily 
        : criteriaPassedFamily.filter(backpack =>  backpack.title.search(searchInput.searchTerm) >= 0);

 
    return (
        <>
            <Searchbar handleExtensionView={handleExtensionView}  setSearchInput={setSearchInput} 
                searchInput={searchInput} setBackpackType={setBackpackType} setCriteria={setCriteria}/>
            <h1>SHOP</h1>
            <h3 className="found-products"> BAGS FOUND</h3>
            <div data-testid="item-container" className="item-container">{foundItems.map(product =>
                <Card key={product.id} className={extension}
                product={{ "id": product.id, "title": product.title, "price": product.price, "image": product.img }} />
            )}
            </div>
        </>
    )
}