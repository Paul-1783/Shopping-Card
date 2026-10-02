import { Card } from "./card";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
 
describe('Card', () => {
    it("produces img", () => {
        const { getByAltText } = render( <MemoryRouter> <Card product={{"id": 0, "title": "test", "price": 0, "image": "/"}} /> </MemoryRouter>);
        const image = getByAltText("picture 0");
        console.log(" IMG   " , image)
        expect(image).toHaveAttribute("src", "/")
    })
        
    it("produces title", () => {
        render( <MemoryRouter> <Card product={{"id": 0, "title": "test", "price": 0, "image": "/"}} /> </MemoryRouter>);

        const title = screen.getByRole("heading", {level: 3})
        expect(title.textContent).toBe("test")
    })

    it("produces price", () => {
        render( <MemoryRouter> <Card product={{"id": 0, "title": "test", "price": 0, "image": "/"}} /> </MemoryRouter>);

        const price = screen.getByRole("heading", {level: 4})
        expect(price.textContent).toBe("0")
    })
})