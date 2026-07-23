
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import { Slider } from "./Slider";

describe("Slider component", () =>{
    it("produces images",() => {
        const { getByAltText } = render(<Slider />)
        const image = getByAltText("backpack picture 1")
        expect(image).toHaveAttribute('src', './../../assets/backpack/1.jpg')
     })

    // it("shows left image after button click", () =>{
    //     const {container} = render(<Slider />)
    //     const leftBtn = screen.getByRole("left-btn", { name: "<" });

    //     expect(screen.getByRole("rightBtn").textContent).toMatch(/>/i);
    // })
        
    // it("reaches right image after button ", () =>{
    //     const {container} = render(<Slider />)
    //     const rightBtn = screen.getByRole("right-btn", { name: ">" });
    //     expect(screen.getByRole("rightBtn").textContent).toMatch(/>/i);
    // })

})