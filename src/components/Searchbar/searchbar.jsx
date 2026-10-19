

export function Searchbar({handleExtensionView, setSearchInput, searchInput, setBackpackType, setCriteria}) {

    const clearSearchbar = () => {
        searchInput("")
    }

    const handleChangeInput = (newInput) => {
        console.log("SEARCHINPUT ", searchInput);
        setSearchInput(inp => {return {...inp, searchTerm: newInput}})
    }

    return (
        <>
        <div className="search-header" data-testid="searchbar-container">
            <div className="input-panel">
                <button data-testid="creates grid layout" onClick={() => {handleExtensionView(false)}}>
                    <img src="/assets/grid.svg" alt="grid layout" />
                </button>
                <button data-testid="creates row layout" onClick={() => {handleExtensionView(true)}}>
                    <img src="/assets/row.svg" alt="row layout" />
                </button>
                <input data-testid="search-input" id="search-input" role="search" type="search" placeholder='Search...' 
                    onChange={(inp) => handleChangeInput(inp.target.value)} value={searchInput.searchTerm} />  
                <button data-testid="clears search bar" id="clear-Searchbar" 
                    onClick={() => {clearSearchbar()}}> 
                    <img src="/assets/clear-all.svg" alt="clears search input bar" />
                </button>
                <select name="backpack-type" id="back pack-type" data-testid="backpack-type" onChange={backpackType => setBackpackType(backpackType.currentTarget.value)}>
                    <option value="mountaineering">mountaineering</option>
                    <option value="desert">desert crossing</option>
                    <option value="jungle">rumble in the jungle</option>
                    <option value="work">city life</option>
                </select>
                <select name="sort-criteria" id="sort-criteria" data-testid="sort-criteria" onChange={newCriteria => setCriteria(newCriteria.currentTarget.value)}>
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