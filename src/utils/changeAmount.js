export function changeAmount(operator, details, IndexOrderToChange, currentOrder, setCurrentOrder) {
        console.log("CHANGE AMOUNT   CURRENTORDER ", currentOrder    )

            if (IndexOrderToChange === -1 && operator !== "-") {
                setCurrentOrder(
                    [...currentOrder, { id: details.id, price: details.price, title: details.title, img: details.img, amount: 1 }]
                )
            }
            else if (operator === "+") {
                const orderWithAdjustedAmount = currentOrder.map((order, index) => {
                    if (index === IndexOrderToChange)
                        return { ...order, amount: order.amount + 1 }
                    else
                        return order
                })
                setCurrentOrder(orderWithAdjustedAmount)
            }
            else if (IndexOrderToChange !== -1 && currentOrder[IndexOrderToChange].amount === 0) {
                if (IndexOrderToChange > -1) {
                    let orderWithoutDeletedOrder = [...currentOrder.splice(IndexOrderToChange, 1)]
                    IndexOrderToChange = -1
                    setCurrentOrder(orderWithoutDeletedOrder)
                }
            }
            else if (operator === "-") {
                const orderWithAdjustedAmount = currentOrder.map((order, index) => {
                    if (index === IndexOrderToChange)
                        return { ...order, amount: order.amount - 1 }
                    else
                        return order
                })
                setCurrentOrder(orderWithAdjustedAmount)
            }
        console.log(" END OF CHANGE AMOUNT   CURRENTORDER ", currentOrder    )
        
}

   