
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Slider } from "./Slider";

describe("Slider component", () => {

    it("produces images", () => {
        const { getByAltText } = render(<Slider />)
        const image = getByAltText("backpack picture 10")
        expect(image).toHaveAttribute('src', '/assets/backpack/10.jpg')
     })

    it("shows left image after button click", async () => {
        const user = userEvent.setup();
        const { getByAltText } = render(<Slider />)
        
        const leftBtn = screen.getByTestId("slider scrolls left");
        await user.click(leftBtn);

        const image = getByAltText("backpack picture 9")
        expect(image).toHaveAttribute('alt', 'backpack picture 9')

    })
        
    it("reaches right image after button ", async () => {
        const user = userEvent.setup();
        const { getByAltText } = render(<Slider />)
        
        const rightBtn = screen.getByTestId("slider scrolls right");
        await user.click(rightBtn);

        const image = getByAltText("backpack picture 11")
        expect(image).toHaveAttribute('alt', 'backpack picture 11')
    })

})