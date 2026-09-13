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
    it("links to team section", async () => {
        render(<MemoryRouter>
            <Footer/>
        </MemoryRouter>)

        const teamButton = screen.getByRole( "link", { name: /team/i })

        expect(teamButton).toHaveClass('link-styling')
        expect(teamButton).toHaveAttribute('href', '/')        //?
    })
   
    it("links to press section", async () => {
       render(<MemoryRouter>
            <Footer/>
        </MemoryRouter>)

        const pressButton = screen.getByRole( "link", { name: /press/i })

        expect(pressButton).toHaveClass('link-styling')
        expect(pressButton).toHaveAttribute('href', '/')        //?
    })

    it("links to jobs section", async () => {
        render(<MemoryRouter>
            <Footer/>
        </MemoryRouter>)

        const jobsButton = screen.getByRole( "link", { name: /jobs/i })

        expect(jobsButton).toHaveClass('link-styling')
        expect(jobsButton).toHaveAttribute('href', '/')        //?
    })
})

describe('help', () => {
    it("links to FAQ section", () => {
        render(<MemoryRouter>
            <Footer/>
        </MemoryRouter>)

        const faqButton = screen.getByRole( "link", { name: /faq/i })

        expect(faqButton).toHaveClass('link-styling')
        expect(faqButton).toHaveAttribute('href', '/')        //?
    })

    it("links to contact section", () => {
        render(<MemoryRouter>
            <Footer/>
        </MemoryRouter>)

        const contactButton = screen.getByRole( "link", { name: /contact/i })

        expect(contactButton).toHaveClass('link-styling')
        expect(contactButton).toHaveAttribute('href', '/')        //?
    })

    it("links to FAQ section", () => {
        render(<MemoryRouter>
            <Footer/>
        </MemoryRouter>)

        const warrantButton = screen.getByRole( "link", { name: /warrant/i })

        expect(warrantButton).toHaveClass('link-styling')
        expect(warrantButton).toHaveAttribute('href', '/')        //?
    })

    it("links to FAQ section", () => {
        render(<MemoryRouter>
            <Footer/>
        </MemoryRouter>)

        const shippingButton = screen.getByRole( "link", { name: /shipping and returns/i })

        expect(shippingButton).toHaveClass('link-styling')
        expect(shippingButton).toHaveAttribute('href', '/')        //?
    })

})

describe("interaction", () => {
    it("renders chat symbol", () => {
        render(<MemoryRouter>
            <Footer/>
        </MemoryRouter>)

        const chatImg = screen.getByAltText("chat symbol")
        expect(chatImg).toBeInTheDocument();
    })

    it('enters into and clears the input field', async () => {
            const user = userEvent.setup();
    
            render(<MemoryRouter>
                <Footer/>
            </MemoryRouter>)
        
            const emailInput = screen.getByTestId("email-input");
    
            await user.type(emailInput, 'new@new.de');
            expect(emailInput).toHaveValue("new@new.de");
    
            await user.clear(emailInput)
            
            expect(emailInput).toHaveValue('');
    })
    
    it('clears the input field by clicking submit button', async () => {
            const user = userEvent.setup();

            render(<MemoryRouter>
                <Footer/>
            </MemoryRouter>)
                
            const emailInput = screen.getByTestId("email-input");
            const emailSubmitBtn = screen.getByTestId("email-submit");
    
            await user.type(emailInput, 'new@new.de');
            expect(emailInput).toHaveValue("new@new.de");
    
            await user.click(emailSubmitBtn);
    
            expect(emailInput).toHaveValue('');
    })
})
