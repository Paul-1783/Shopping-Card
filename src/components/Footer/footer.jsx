 
import { useState } from "react"
import "./footer.css"

export function Footer(){
      const [emailInput, setEmailInput] = useState("")

    const clearEmailInput = () => {
        setEmailInput("")
    }



    return(
        <div className="footer">
        <div className="footer-container">
            <div className="order-specs">
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
                <span></span>
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
            <div>
                <div className="about">
                    <a role="link" className="link-styling" href="/">Team</a>
                    <a role="link" className="link-styling" href="/">Press</a>
                    <a role="link" className="link-styling" href="/">Jobs</a>

                </div>
                <div className="help">
                    <a role="link" className="link-styling" href="/">FAQ</a>
                    <a role="link" className="link-styling" href="/">Contact</a>
                    <a role="link" className="link-styling" href="/">Warrant</a>
                    <a role="link" className="link-styling" href="/">Shipping and Returns</a>
                </div>
            </div>
            <div className="ask-specialist">
                <div className="chat">
                    <h3>ASK A RATPACK BACKPACK SPECIALIST</h3>
                    <div className="chat-opt">
                        <span>Chat with us</span> <img src="./assets/chat.svg" alt="chat symbol" />
                    </div>
                </div>
                <div>
                    <h3>BE PART OF THE RATPACK BACKPACK COMMUNITY</h3>
                    <div className="email">
                        <input type="text" data-testid="email-input"  onChange={inp => setEmailInput(inp.target.value)} value={emailInput} 
                        placeholder="Enter your Email"/>
                        <button data-testid="email-submit" onClick={() => {clearEmailInput()}} className="btn email-btn">Submit Email</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="portfolio">
            <span></span>
            <div className="credits">
                <h3>Developped By <i>Paul1783</i></h3>
                <button data-testid="button leads to git" onClick={() => {}} className="btn">
                    <img src="./assets/brand-git.svg" alt="git brand icon" />
                </button>
            </div>
        </div>
        </div>
    )
}