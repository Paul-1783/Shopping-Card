import { backpackInfo } from "../data/backpackInfo";

export function loadBackpackInfo()
{   
    localStorage.setItem("backpackInfo", backpackInfo)
    return backpackInfo;
}