import "./searchbar.css"

export function Searchbar({ handleExtensionView, setSearchInput, searchInput, backpackType, setBackpackType, criteria, setCriteria }) {

    const clearSearchbar = () => {
        handleChangeInput("")
        setBackpackType({value: "default"});
        setCriteria({value: "default"});
    }

    const handleChangeInput = (newInput) => {
        setSearchInput(inp => { return { ...inp, searchTerm: newInput } })
    }
    
    return (
        <>
            <div className="search-header" >
                <div className="input-panel" data-testid="searchbar-container">
                    <button data-testid="creates grid layout" onClick={() => { handleExtensionView(false) }} className="btn searchbar-btn">
                        <img src="/assets/grid.svg" alt="grid layout" />
                    </button>
                    <button data-testid="creates row layout" onClick={() => { handleExtensionView(true) }} className="btn searchbar-btn">
                        <img src="/assets/rows.svg" alt="row layout" />
                    </button>
                    <input data-testid="search-input" id="search-input" role="search" type="search" placeholder='Search...'
                        onChange={(inp) => handleChangeInput(inp.target.value)} value={searchInput.searchTerm} />
                    <select name="backpack-type" id="backpack-type" data-testid="backpack-type"value={backpackType} onChange={backpackType => setBackpackType(backpackType.currentTarget.value)}>
                        <option value="default">choose backpack type</option>
                        <option value="mountaineering">mountaineering</option>
                        <option value="desert">desert crossing</option>
                        <option value="jungle">rumble in the jungle</option>
                        <option value="work">city life</option>
                    </select>
                    <select name="sort-criteria" id="sort-criteria" data-testid="sort-criteria" value={criteria} onChange={newCriteria => setCriteria(newCriteria.currentTarget.value)}>
                        <option value="default">choose criteria</option>
                        <option value="sturdy">especially resilitant in demanding environments</option>
                        <option value="volume">suited for long trips</option>
                        <option value="elegance">winners of this years design contest</option>
                        <option value="cheap">for the sensitive purse</option>
                    </select>
                    <button data-testid="clears search bar" id="clear-Searchbar"
                        onClick={() => { clearSearchbar() }} className="btn">
                        <img src="/assets/clear-all.svg" alt="clears search input bar" />
                    </button>
                </div>
            </div>
        </>
    )
}