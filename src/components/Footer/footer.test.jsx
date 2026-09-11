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

        const currentLanguage = screen.getByTestId("language-select")
    })

    it("selects currency", () => {
        render(<MemoryRouter>
            <Footer/>
        </MemoryRouter>)

        const currentCurrency = screen.getByTestId("currency-select")
    })

})