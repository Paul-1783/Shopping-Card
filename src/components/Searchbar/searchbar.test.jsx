import { Searchbar } from "./searchbar.jsx";
import { describe, it, expect } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";


describe('searchbar', () => {

    it('presents products with grid layout', async () => {
        const user = userEvent.setup();
        
        const setRowView = () => {}

        render(<Searchbar setRowView={setRowView}/>);
        
        const gridBtn = screen.getByTestId("creates grid layout");
        await user.click(gridBtn);
    })

    it('presents products with row layout', async () => {
        const user = userEvent.setup();
     
        const setRowView = () => {}

        render(<Searchbar setRowView={setRowView}/>);

        const rowBtn = screen.getByTestId("creates row layout");
        await user.click(rowBtn);
    })

    it('enters into and clears the input field', async () => {
        const user = userEvent.setup();

        render(<Searchbar/>);
    
        const searchInput = screen.getByTestId("search-input");

        await user.type(searchInput, 'new');
        expect(searchInput).toHaveValue("new");

        await user.clear(searchInput)
        
        expect(searchInput).toHaveValue('');
    })

    it('clears the input field', async () => {
        const user = userEvent.setup();

        render(<Searchbar/>);
    
        const searchInput = screen.getByTestId("search-input");
        const clearBtn = screen.getByTestId("clears search bar");

        await user.type(searchInput, 'new');
        expect(searchInput).toHaveValue("new");

        await user.click(clearBtn);

        expect(searchInput).toHaveValue('');
    })

    
    it('selects backpack type', () => {
        render(<Searchbar/>);

        const backpackType = screen.getByTestId("backpack-type");
        fireEvent.change(backpackType, { target: { value: 'work' }})
        expect(backpackType[3].selected).toBeTruthy();
    })

    it('sorts backpacks by criteria', () => {
        render(<Searchbar/>);

        const backpackCriteria = screen.getByTestId("sort-criteria");
        fireEvent.change(backpackCriteria, { target: { value: 'elegance' }})
        expect(backpackCriteria[2].selected).toBeTruthy();
    })

})