import {BackpackContext} from './BackpackContext.jsx'
import { loadBackpackInfo } from '../features/loadBackpackInfo.js'

export function BackpackProvider({ children }) {
    const loadedBackpackInfo = loadBackpackInfo()

    return (
        <>
            <BackpackContext  value={{loadedBackpackInfo: loadedBackpackInfo}}>{children}</BackpackContext>
        </>
    )
}