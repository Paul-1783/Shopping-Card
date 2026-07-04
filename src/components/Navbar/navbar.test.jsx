import { describe, expect, it, vi } from "vitest";
import { Navbar } from "./navbar";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from 'react-router'
import { createMemoryHistory } from 'history';

describe("navbar features reachables" , () => {

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


describe("Navbar links testing", () => {

    it("tests if SHOP button works", async () => {
        const history = createMemoryHistory();

        history.push = vi.fn();
        history.push('/../Shop/shop')
        const { getByText } = render(< MemoryRouter history={history} >
                < Navbar/>
            </ MemoryRouter>)

        fireEvent.click(getByText(/^SHOP?/))

        expect(history.push).toHaveBeenCalledWith('/../Shop/shop');  
    })

    
    it("tests if HOME button works", async () => {
        const history = createMemoryHistory();

        history.push = vi.fn();
        history.push('/../Home/home')
        const { getByText } = render(< MemoryRouter history={history} >
                < Navbar/>
            </ MemoryRouter>)

        fireEvent.click(getByText(/^HOME?/))

        expect(history.push).toHaveBeenCalledWith('/../Home/home');  
    })

       
    it("tests if CHECKOUT button works", async () => {
        const history = createMemoryHistory();

        history.push = vi.fn();
        history.push('/../Checkout/checkout')
        const { getByText } = render(< MemoryRouter history={history} >
                < Navbar/>
            </ MemoryRouter>)

        fireEvent.click(getByText(/^CHECKOUT?/))

        expect(history.push).toHaveBeenCalledWith('/../Checkout/checkout');  
    })

})