export const enterAmount = (newAmount, details, IndexOrderToChange, currentOrder, setCurrentOrder) => {
        if (IndexOrderToChange !== -1) {
            const orderWithAdjustedAmount = currentOrder.map((order, index) => {
                if (index === IndexOrderToChange)
                    return { ...order, amount: newAmount === "" ? 0 : parseInt(newAmount) }
                else
                    return order
            })
            setCurrentOrder(orderWithAdjustedAmount)
        } else {
            setCurrentOrder([...currentOrder,
            { id: details.id, price: details.price, title: details.title, img: details.img, amount: 1 }]
            )
        }
    }
