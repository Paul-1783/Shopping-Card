import { describe, expect, it } from "vitest";
import { Navbar } from "./navbar";
import { render, screen } from "@testing-library/react";


describe("navbar features" , () => {

    it("verfies navbar component is reachable", () => {
        render(< Navbar/>);
        const navHeader = screen.getByText("SHOP");
        expect(navHeader).toBeInTheDocument();
    })

    it("verifies Home btn works", () => {
        render(<Navbar/>)
        const homeBtn = screen.getByText("HOME")
        expect(homeBtn).toBeInTheDocument()
    })

    it("verifies Shop btn works", () => {
        render(<Navbar/>)
        const shopBtn = screen.getByText("SHOP")
        expect(shopBtn).toBeInTheDocument()    
    })

    it("verifies Checkout btn works", () => {
        render(<Navbar/>)
        const checkoutBtn = screen.getByText("CHECKOUT")
        expect(checkoutBtn).toBeInTheDocument()    
    })

})