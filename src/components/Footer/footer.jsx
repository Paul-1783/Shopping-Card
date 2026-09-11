 
export function Footer(){
    return(
        <>
        <div className="footer-container">
            <div className="oder-specs">
                <img src="./assets/rodent.svg" alt="ratpack enterprise logo" />
                <select name="language-select" id="language-select" data-testid="language-select"></select>
                <select name="currency-select" id="currency-select" data-testid="currency-select"></select>
            </div>
            <div className="about"></div>
            <div className="help"></div>
            <div className="ask-specialist"></div>
        </div>
        <div className="portfolio">
            <h3>Developped By Paul1783</h3>
            <button data-testid="button leads to git" onClick={() => {}}>
                <img src="./assets/brand-git.svg" alt="git brand icon" />
            </button>
        </div>
        </>
    )
}