import { Navigate, Route, Routes } from "react-router-dom"
import { Contact,  About, MyAccount  } from "../Global/components"
import { Categories } from "../Global/components/Categories"
import { Main } from "../Components/Main/components"
import { CartContent } from "../Components/Navbar/components/cart/CartContent"
import { ProductsLayout } from "../Components/products/ProductsLayout"

export const Rutas = () => {

    return (
        <Routes>
            <Route path="/" element={<Main /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/collection" element={ <ProductsLayout/> } />
            <Route path="/contact" element={ <Contact /> } />
            <Route path="/categories" element={ <Categories /> } />
            <Route path="/myAccount" element={ <MyAccount /> } />
            <Route path="/cart" element={ <CartContent /> } />
            <Route path='*' element={ <Navigate to='/' /> } />
        </Routes>
    )
}