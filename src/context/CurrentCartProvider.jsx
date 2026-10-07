import { CurrentCartContext } from "./CurrentCartContext"

export function CurrentCartProvider({ children }) {
    const currentCart = [];

    return (
        <>
            <CurrentCartContext  value={{currentCart: currentCart}}>{children}</CurrentCartContext>
        </>
    )
}