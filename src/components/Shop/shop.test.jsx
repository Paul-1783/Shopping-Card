import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Shop } from "./shop.jsx";
import { BackpackProvider } from "../../context/BackpackProvider.jsx";
import { MemoryRouter } from "react-router";

describe('shop', () => {

   it("comprehends searchbar", () => {
      render(<MemoryRouter> <BackpackProvider><Shop/></BackpackProvider> </MemoryRouter>);

      const searchBarItem = screen.getByTestId("searchbar-container");
      expect(searchBarItem).toBeInTheDocument();
   })

   it("comprehends item container", () => {
      render(<MemoryRouter> <BackpackProvider><Shop/></BackpackProvider> </MemoryRouter>);

      const itemContainer = screen.getByTestId("item-container");
      expect(itemContainer).toBeInTheDocument();
   })
 
   it("loads shop element 19", () => {
      render(<MemoryRouter> <BackpackProvider><Shop/></BackpackProvider> </MemoryRouter>);

      const elemId = screen.getByText("19")
      expect(elemId.textContent).toBe("19")
   })

   it("calls extended card details", () =>  {
      render(<MemoryRouter> <BackpackProvider><Shop/></BackpackProvider> </MemoryRouter>);

      
   })


})