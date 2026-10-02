import { useContext } from "react"
import { BackpackContext } from "../../context/BackpackContext"
import { Link, useLocation } from "react-router"

export function CardExtended() {
    
    const { loadedBackpackInfo } = useContext(BackpackContext)
    const location = useLocation()

    const details = loadedBackpackInfo[location.state.index]
 console.log(loadedBackpackInfo[location.state.index])
 
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
                 <p>
                    <span></span>
                </p>
            </div>
            <Link to="/shop">Back</Link>
        </>
    )
}