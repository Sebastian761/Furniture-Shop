import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const dataContext = createContext()

export const DataProvider = ({ children }) => {

    const [data, setData] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() =>{
        axios('/src/Global/data/home-decoration.json').then((res) => setData(res.data))
    }, [])

    
    const buyProducts = (product) => {
        setCart([...cart, product])

    const productRepeat = cart.find((item) => item.id === product.id)

    if(productRepeat){
        setCart(cart.map((item) => item.id === product.id ? {...product, quanty: productRepeat.quanty + 1} : item))
    } else {
        setCart([...cart, product])
    }

}

const decrease = (product) => {

    const productRepeat = cart.find((item) => item.id === product.id)

    productRepeat.quanty !== 1 &&
        setCart(cart.map((item) =>( item.id === product.id ? {...product, quanty: productRepeat.quanty - 1} : item)))

}

    return(
        <dataContext.Provider value={ {data, cart, setCart,  buyProducts, decrease} }>
            {children}
        </dataContext.Provider>
    )
}