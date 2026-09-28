import {loadBackpackInfo} from "./loadBackpackInfo.js";
import { describe, expect, it } from 'vitest';
import { waitFor } from '@testing-library/react';
 

describe('data', () => {
    it("tests for succesful loading of data", () => {
        const loadedBackpackInfo = loadBackpackInfo();
        expect(loadedBackpackInfo[18].features.color).toBe("Gray + lime green + Royal blue + Charcoal gray")
        }
    )

    it("loads asynchronously", async () => {
        const loadedBackpackInfo = loadBackpackInfo();
        await waitFor(() => 
        expect(fetch('https://fakestoreapi.com/carts').then(response => response.json()).then(data => data)).not.toBe(null))
        expect(loadedBackpackInfo[18].features.color).toBe("Gray + lime green + Royal blue + Charcoal gray")
    })
})