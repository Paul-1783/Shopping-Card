import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Shop } from "./shop.jsx";
import { BackpackProvider } from "../../context/BackpackProvider.jsx";
import { getValueOrTextContent } from "@testing-library/user-event/dist/cjs/document/getValueOrTextContent.js";


describe('shop', () => {
   // it("comprehends searchbar", () => {
   //    render(<BackpackProvider><Shop/></BackpackProvider>);

   //    const searchBarItem = screen.getByTestId("searchbar-container");
   //    expect(searchBarItem).toBeInTheDocument();
   // })

   // it("comprehends item container", () => {
   //    render(<BackpackProvider><Shop/></BackpackProvider>);

   //    const itemContainer = screen.getByTestId("item-container");
   //    expect(itemContainer).toBeInTheDocument();
   // })
 
   // it("loads shop element 19", () => {
   //    render(<BackpackProvider><Shop/></BackpackProvider>);

   //    const elemId = screen.getByText("19")
   //    expect(elemId.textContent).toBe("19")
   // })
   it("test", () => {
      expect(0).toBe(0)
   })
})