
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import { Slider } from "./Slider";

describe("Slider component", () =>{
    it("produces images",() => {
        render(<Slider />)
        expect(screen.getByRole("header-slider").textContent).toMatch(/radical rhinos/i);
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