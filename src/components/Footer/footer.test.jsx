import { describe, expect, it } from "vitest";
import { Footer } from "./footer";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router'
import userEvent from "@testing-library/user-event";

describe("footer features" , () => {
    
    it("is reachable", ()=>{
        render(<MemoryRouter>
              <Footer/>
        </MemoryRouter>)
        const footer = screen.getByText("Developped By Paul1783");
        expect(footer).toBeInTheDocument();
    })

    it("links to git repo", async () => {
        const user = userEvent.setup();

        const { getByAltText } =  render(<MemoryRouter>
            <Footer/>
        </MemoryRouter>)

        const gitBtn = screen.getByTestId("button leads to git");
        await user.click(gitBtn);

        const image = getByAltText("git brand icon")
        expect(image).toHaveAttribute('alt', 'git brand icon')
    })
})

describe ("Select section", () => {
        it("gets logo loaded", () => {
        const { getByAltText } = render(<MemoryRouter>
            <Footer/>
        </MemoryRouter>)

        const logoIcon =  getByAltText("ratpack enterprise logo");

         expect(logoIcon).toHaveAttribute('src', './assets/rodent.svg')
    })

    it("selects language", () => {
        render(<MemoryRouter>
            <Footer/>
        </MemoryRouter>)

        const currentLanguage = screen.getByTestId("language-select");
        fireEvent.change(currentLanguage, { target: { value: 'spanish' }})
        expect(currentLanguage[2].selected).toBeTruthy();
    })

    it("selects currency", () => {
        render(<MemoryRouter>
            <Footer/>
        </MemoryRouter>)

        const currentCurrency = screen.getByTestId("currency-select")
        fireEvent.change(currentCurrency, { target: { value: 'yen' }})
        expect(currentCurrency[7].selected).toBeTruthy();  
    })
})

describe('about', () => {
    it("links to team section", () => {

        const checkAbout = () => {}

        const user = userEvent.setup();

        render(<MemoryRouter>
            <Footer/>
        </MemoryRouter>)


        
    })
})
