import { describe, it, expect } from "vitest";
import { Intro } from './intro.jsx';
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router';

describe('intro features', () => {
    it(" is reachable", () => {
        render(
            <MemoryRouter>
                <Intro/>
            </MemoryRouter>
        )
        const intro = screen.getByText("Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim laboriosam, commodi sunt dolorum cum nobis quae quaerat sit. Magnam, odit. Adipisci quidem eos commodi saepe odit hic, ab officia dicta?");
        expect(intro).toBeInTheDocument();
    })

    it("contains the image", () => {
        const { getByAltText } = render (
            <MemoryRouter>
                <Intro/>
            </MemoryRouter>
        )

        const image = getByAltText("mountaineer with backpack")
        expect(image).toHaveAttribute('alt', 'mountaineer with backpack')
    })
})