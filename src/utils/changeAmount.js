 
export function changeAmount(operator, details, IndexOrderToChange, currentOrder, setCurrentOrder) {
    
            console.log("IndexOrderToChange     ", IndexOrderToChange)
            if (IndexOrderToChange === -1 && operator === "+") {
                setCurrentOrder(
                    [...currentOrder, { id: details.id, price: details.price, title: details.title, img: details.img, amount: 1 }]
                )
            }
            else if(IndexOrderToChange === -1 ) {
                return;
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
            else if (currentOrder[IndexOrderToChange].amount === 0) {
                    let copyOfCurrentOrder = currentOrder.slice()
                    console.log("HIER        splice:  ", copyOfCurrentOrder.splice(IndexOrderToChange, 1));
                    setCurrentOrder(copyOfCurrentOrder);
                    
                    // = currentOrder.map((order, index) => 
                    //    {                                            
                    //     if(index !== IndexOrderToChange) 
                    //         return order;
                    //     }
                    // )
                    // if(typeof ordersWithoutDeletedOrder[0] === 'undefined')
                    //     setCurrentOrder([]);
                    // else
                    //     setCurrentOrder(ordersWithoutDeletedOrder);
                    IndexOrderToChange = -1;
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
         
}

   