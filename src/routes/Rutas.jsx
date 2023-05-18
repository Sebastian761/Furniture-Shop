import { Navigate, Route, Routes } from "react-router-dom"
import { Collection, Contact,  About, MyAccount  } from "../Global/components"
import { Categories } from "../Global/components/Categories"



export const Rutas = () => {

    return (
        <Routes>
            <Route path="/about" element={ <About /> } />
            <Route path="/collection" element={ <Collection /> } />
            <Route path="/contact" element={ <Contact /> } />
            <Route path="/categories" element={ <Categories /> } />
            <Route path="/myAccount" element={ <MyAccount /> } />
            <Route path='*' element={ <Navigate to='/' /> } />
        </Routes>
    )
}