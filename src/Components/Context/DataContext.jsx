import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const dataContext = createContext()

export const DataProvider = ({ children }) => {

    const [data, setData] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() =>{
        axios('/src/Global/data/home-decoration.json').then((res) => setData(res.data))
    }, [])

    return(
        <dataContext.Provider value={ {data, cart, setCart} }>
            {children}
        </dataContext.Provider>
    )
}