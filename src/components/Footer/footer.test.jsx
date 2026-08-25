import { describe, expect, it } from "vitest";
import { Footer } from "./footer";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router'
import userEvent from "@testing-library/user-event";

describe("footer features" , () => {
    
    it("is reachable", ()=>{
        render(<MemoryRouter>
              <Footer/>
        </MemoryRouter>)
        const footer = screen.getByText("FOOTER");
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