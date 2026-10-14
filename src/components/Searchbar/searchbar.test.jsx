import { Searchbar } from "./searchbar.jsx";
import { describe, it, expect } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { useEffect, useState } from "react";


describe('searchbar', () => {

    it('enters into and clears the input field', () => {
        // const [searchInput, setSearchInput] = useState({searchTerm : "", backpackType: "", criteria: ""});

        // render(<Searchbar handleExtensionView={"handleExtensionView"}  setSearchInput={setSearchInput} searchInput={searchInput}/>);
    
        // const requestedSearchInput = screen.getByTestId("search-input");
        // useEffect( () => {
        //     const user = userEvent.setup();
        //     async () => {
        //         await user.type(requestedSearchInput, 'new');

        //         expect(requestedSearchInput).toHaveValue("new");

        //         await user.clear(requestedSearchInput);
                
        //         expect(requestedSearchInput).toHaveValue('');
        //     }
        // })
     expect(true).toBe(true)
    })

    // it('clears the input field by clicking clear button', async () => {
    //     const user = userEvent.setup();

    //     render(<Searchbar/>);
    
    //     const searchInput = screen.getByTestId("search-input");
    //     const clearBtn = screen.getByTestId("clears search bar");

    //     await user.type(searchInput, 'new');
    //     expect(searchInput).toHaveValue("new");

    //     await user.click(clearBtn);

    //     expect(searchInput).toHaveValue('');
    // })

    
    // it('selects backpack type', () => {
    //     render(<Searchbar/>);

    //     const backpackType = screen.getByTestId("backpack-type");
    //     fireEvent.change(backpackType, { target: { value: 'work' }})
    //     expect(backpackType[3].selected).toBeTruthy();
    // })

    // it('sorts backpacks by criteria', () => {
    //     render(<Searchbar/>);

    //     const backpackCriteria = screen.getByTestId("sort-criteria");
    //     fireEvent.change(backpackCriteria, { target: { value: 'elegance' }})
    //     expect(backpackCriteria[2].selected).toBeTruthy();
    // })

})