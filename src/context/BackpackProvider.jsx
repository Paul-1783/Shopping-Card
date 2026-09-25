import {BackpackContext} from './BackpackContext.jsx'

export function BackpackProvider({ children }) {
    return (
        <>
            <BackpackContext  value={{name: "testback"}}>{children}</BackpackContext>
        </>
    )
}