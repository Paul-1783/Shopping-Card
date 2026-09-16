import { Testimonial } from "./testimonial";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

describe("Testimonial reachable", () => {

    it("loads girls testimonial", () => {
        render(<Testimonial/>);
        
        const nameFound = screen.getByText(/Lili/i);
        expect(nameFound).toBeInTheDocument();
    })

    it("loads girls img", () => {
        render(<Testimonial/>);
        
        const imgFound = screen.getByAltText("Lili and Tera at Station");
        expect(imgFound).toHaveAttribute('src', '/assets/testimonials/girls_testimonial.jpg')
    })


    it("loads Pepe img", () => {
        render(<Testimonial/>);
        
        const imgFound = screen.getByAltText("Pepe at his way to work on the farm");
        expect(imgFound).toHaveAttribute('src', '/assets/testimonials/bloke_testimonial.jpg')
    })


    it("loads Maria img", () => {
        render(<Testimonial/>);
        
        const imgFound = screen.getByAltText("Maria rests at Salamanca Bus Station");
        expect(imgFound).toHaveAttribute('src', '/assets/testimonials/blonde_testimonial.jpg')
    })
})