import { describe, expect, it } from "vitest";
import { Navbar } from "./navbar";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router'



describe("navbar features" , () => {

    it("verfies navbar component is reachable", () => {
        render(< MemoryRouter  >
                < Navbar/>
            </ MemoryRouter>)
        const navHeader = screen.getByText("SHOP");
        expect(navHeader).toBeInTheDocument();
    })

    it("verifies Home btn reachable", () => {
        render(< MemoryRouter  >
                < Navbar/>
            </ MemoryRouter>)        
        const homeBtn = screen.getByText("HOME")
        expect(homeBtn).toBeInTheDocument()
    })

    it("verifies Shop btn reachable", () => {
        render(< MemoryRouter  >
                < Navbar/>
            </ MemoryRouter>)        
        const shopBtn = screen.getByText("SHOP")
        expect(shopBtn).toBeInTheDocument()    
    })

    it("verifies Checkout btn reachable", () => {
        render(< MemoryRouter  >
                < Navbar/>
            </ MemoryRouter>)
        const checkoutBtn = screen.getByText("CHECKOUT")
        expect(checkoutBtn).toBeInTheDocument()    
    })

})