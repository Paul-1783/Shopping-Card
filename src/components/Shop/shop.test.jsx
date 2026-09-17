import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Shop } from "./shop.jsx";



describe('shop', () => {
   it("comprehends searchbar", () => {
      render(<Shop/>);

      const searchBarItem = screen.getByTestId("searchbar-container");
      expect(searchBarItem).toBeInTheDocument();
   })

   it("comprehends item container", () => {
      render(<Shop/>);

      const itemContainer = screen.getByTestId("item-container");
      expect(itemContainer).toBeInTheDocument();
   })
})