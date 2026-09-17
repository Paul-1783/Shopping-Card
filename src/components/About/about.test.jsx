import { About } from "./about";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

describe('about page', () => {
    it("introduces Paul as programmer", () => {
        render(<About/>);
        const aboutPaul = screen.getByText(/Paul/i);

        expect(aboutPaul).toBeInTheDocument();
    })
})