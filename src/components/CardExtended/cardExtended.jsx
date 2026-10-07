import { useContext } from "react"
import { BackpackContext } from "../../context/BackpackContext"
import { Link, useLocation } from "react-router"

export function CardExtended({currentOrder, setCurrentOrder}) {
        console.log("CardExtended CURRENTORDER ", currentOrder)

    
    const { loadedBackpackInfo } = useContext(BackpackContext);
    const location = useLocation();
    const index = location.state.index;
    const details = loadedBackpackInfo[index];
    let IndexOrderToChange  = currentOrder.findIndex(backpack => backpack.id === index);


    function changeAmount(operator) {
        setCurrentOrder(orders =>  { 
            if (IndexOrderToChange === -1 && operator !== "-") {
                setCurrentOrder([...currentOrder,
                { id: details.id, price: details.price, title: details.title, img: details.img, amount: 1 }])
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
            else if (IndexOrderToChange !== -1 && orders[IndexOrderToChange].amount === 0) { 

                if(IndexOrderToChange > -1)
                {
                    let orderWithoutDeletedOrder = [...currentOrder.splice(IndexOrderToChange, 1)]
                    IndexOrderToChange = -1
                    setCurrentOrder(orderWithoutDeletedOrder)
                }
            }
            else if (operator === "-") {
                const orderWithAdjustedAmount = currentOrder.map((order, index) => {
                    if (index === IndexOrderToChange)
                        return { ...order, amount:  order.amount - 1 }
                    else
                        return order
                })
                setCurrentOrder(orderWithAdjustedAmount)            
            } 
        })
    }

    const enterAmount = (newAmount) => {
        if (IndexOrderToChange !== -1) {
            const orderWithAdjustedAmount =  currentOrder.map((order, index) => {
               if(index === IndexOrderToChange ) 
                return {...order, amount : newAmount === "" ? 0 : parseInt(newAmount)} 
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

    return  (
        <>
            <h1>CART EXTENDED</h1>
            <div>
                <h2>{details.title}</h2>
                <div>                    
                    <img src={details.img} alt={`Backpack ${details.id}`}/>
                    <p>
                        <span>Description:  </span>{details.description}
                    </p>              
                </div>
                <p>
                    <span>Comoposition:  </span>{details.features.composition}
                </p>               
                 <p>
                    <span>Design:  </span>{details.features.design}
                </p>
                <p>
                    <span>Price:  </span>{details.price}
                </p>
                <p>
                    <span>Color:  </span>{details.features.color}
                </p>               
                 <p className="amount-section">
                    <button className="amount-btn" onClick={() => {changeAmount("+")}} >+</button>
                   <input type="text" name="amount" id="amount" 
                   value={IndexOrderToChange  === -1 ? 0 : currentOrder[IndexOrderToChange].amount}
                   onChange={e => enterAmount(e.target.value)} />
                    <button className="amount-btn" onClick={() => {changeAmount("-")}}>-</button>
                </p>
            </div>
            <Link to="/shop">Back</Link>
        </>
    )
}