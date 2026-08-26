import { Searchbar } from "./searchbar";
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";


describe('searchbar', () => {

    it('presents products with grid layout', async () => {
        const user = userEvent.setup();
        
        render(<Searchbar/>)
        
        const gridBtn = screen.getByTestId("creates grid layout");
        await user.click(gridBtn);
    })

    it('presents products with row layout', async () => {
        const user = userEvent.setup();
     
        render(<Searchbar/>)

        const rowBtn = screen.getByTestId("creates row layout");
        await user.click(rowBtn);
    })

    it('contains an input field for search', () => {
        const user = userEvent.setup();
     
        render(<Searchbar/>)

        const searchInput = screen.getByRole("search");
        expect(searchInput).toHaveAttribute('placeholder', 'Search...');
    })

    it('clears the input field', async () => {
        const user = userEvent.setup();

        render(<Searchbar/>);
    
        const searchInput = screen.getByTestId("testme");
        const clearBtn = screen.getByTestId("clears search bar");

        user.paste(searchInput, "test")

        const event = new Event('change')
        searchInput.value = 'test'
        searchInput.dispatchEvent(event)

        expect(searchInput).toHaveValue("test")

        await user.click(clearBtn);
        expect(searchInput.textContent).toMatch('');
    })

    it('selects backpack type', () => {
        const user = userEvent.setup()

        render(<Searchbar/>)

        const 
    })

    it('sorts backpacks by criteria', () => {

    })

})