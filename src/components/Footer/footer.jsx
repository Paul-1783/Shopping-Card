 
export function Footer(){
    return(
        <>
        <div className="footer-container">
            <div className="oder-specs">
                <img src="./assets/rodent.svg" alt="ratpack enterprise logo" />
                <select name="language-select" id="language-select" data-testid="language-select">
                    <option value="english">English</option>
                    <option value="german">Deutsch</option>
                    <option value="spanish">Español</option>
                    <option value="french">Français</option>
                    <option value="italian">Italiano</option>
                    <option value="corean">한국어</option>
                    <option value="chinese">中文</option>
                    <option value="russian">русский</option>
                </select>
                <select name="currency-select" id="currency-select" data-testid="currency-select">
                    <option value="euro">€ Euro(EUR)</option>
                    <option value="ausDollar">$ Australian Dollar</option>
                    <option value="canDollar">$ Canadian Dollar</option>
                    <option value="swissFranc">Fr Swiss Franc (CHF)</option>
                    <option value="danishCrown">kr Danish Krone (DKK)</option>
                    <option value="poundSterling">£ Pound Sterling (GBP)</option>
                    <option value="hongKongDollar">$ Hong Kong Dollar (HKD)</option>
                    <option value="yen">¥ Japanese Yen (JPY)</option>
                    <option value="peso">$ Mexican Peso (MXN)</option>
                    <option value="norewgianKrone">kr Norwegian Krone (NOK)</option>
                    <option value="newZealandDollar">$ New Zealand Dollar</option>
                    <option value="zloty">zł Zloty (PLN)</option>
                    <option value="swedishKrone">kr Swedish Krona (SEK)</option>
                    <option value="singaporeDollar">$ Singapore Dollar (SGD)</option>
                    <option value="usDollar">$ US Dollar (USD)</option>
                </select>
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