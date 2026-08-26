
export function Searchbar() {
    return (
        <>
        <div className="input-panel">
            <button data-testid="creates grid layout">
                <img src="/assets/grid.svg" alt="grid layout" />
            </button>
            <button data-testid="creates row layout">
                <img src="/assets/row.svg" alt="row layout" />
            </button>
            <input data-testid="testme" role="search" type="search" placeholder='Search...' />
            <button data-testid="clears search bar">
                <img src="/assets/clear-all.svg" alt="clears search input bar" />
            </button>
        </div>
        </>
    )
}