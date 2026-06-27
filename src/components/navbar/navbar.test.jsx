import { describe, expect, it } from "vitest";
import { Navbar } from "./navbar";
import { render, screen } from "@testing-library/react";


describe("navbar features" , () => {
    it("verfies navbar component is reachable", () => {
        render(< Navbar/>);
        const navHeader = screen.getByText("SHOP");
        expect(navHeader).toBeInTheDocument();
    })

})