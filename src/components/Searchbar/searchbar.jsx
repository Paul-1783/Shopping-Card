import { useState } from "react"


export function Searchbar({setRowView}) {
   
    const [searchInput, setSearchInput] = useState("")

    const clearSearchbar = () => {
        setSearchInput("")
    }

    return (
        <>
        <div className="search-header">
            <div className="input-panel">
                <button data-testid="creates grid layout"
                    onClick={() => {setRowView("false")}}
                >
                    <img src="/assets/grid.svg" alt="grid layout" />
                </button>
                <button data-testid="creates row layout"
                    onClick={() => {setRowView("true")}}
                >
                    <img src="/assets/row.svg" alt="row layout" />
                </button>
                <input data-testid="search-input" id="search-input" role="search" type="search" placeholder='Search...' 
                onChange={inp => setSearchInput(inp.target.value)} value={searchInput} />
                <button data-testid="clears search bar" id="clear-Searchbar" 
                onClick={() => {clearSearchbar()}}> 
                    <img src="/assets/clear-all.svg" alt="clears search input bar" />
                </button>
                <select name="backpack-type" id="backpack-type" data-testid="backpack-type">
                    <option value="mountaineering">mountaineering</option>
                    <option value="desert">desert crossing</option>
                    <option value="jungle">rumble in the jungle</option>
                    <option value="work">city life</option>
                </select>
                <select name="sort-criteria" id="sort-criteria" data-testid="sort-criteria">
                    <option value="sturdy">especially resilitant in demanding environments</option>
                    <option value="volume">suited for long trips</option>
                    <option value="elegance">winners of this years design contest</option>
                    <option value="cheap">for the sensitive purse</option>
                </select>
            </div>
            <h3 className="found-products"> BAGS FOUND</h3>
        </div>
        </>
    )
}