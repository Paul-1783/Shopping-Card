import { describe, expect, it } from "vitest";
import { Footer } from "./footer";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router'

describe("footer features" , () => {
    
    it("footer is reachable", ()=>{
        render(<MemoryRouter>
              <Footer/>
        </MemoryRouter>)
        const footer = screen.getByText("FOOTER");
        expect(footer).toBeInTheDocument();
    })

})