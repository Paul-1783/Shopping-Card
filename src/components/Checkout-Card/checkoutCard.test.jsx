import { CheckoutCard } from "./checkoutCard";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
  
describe('CheckoutCard', () => {
    it("loads data into CheckoutCard", ()=> {
        render(<CheckoutCard 
            oneOrder={{ id: 42, price: 200, title: "testTitle", img: "./helterskelter", amount: 1 }}>
                setCurrentOrder={() => {}}
            </CheckoutCard>)

        const titleText = screen.getByText("testTitle")
        expect(titleText).toBeInTheDocument()
    })

})