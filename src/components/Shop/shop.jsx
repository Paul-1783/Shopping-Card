import { Searchbar } from "../Searchbar/searchbar.jsx"

export function Shop() {

    const searchTest = () => {}; //         ?

    return (
        <>
            <Searchbar setRowView={searchTest} />
            <h1>SHOP</h1>
            <div data-testid="item-container" className="item-container"></div>
        </>
    )
}