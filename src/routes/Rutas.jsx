import { Navigate, Route, Routes } from "react-router-dom"
import { Contact,  About, Categories } from "../Global/components"
import { Login, UserInfo, Logout, MyAccount } from "../Global/components/User"
import { Main } from "../Components/Main/components"
import { CartContent } from "../Components/Navbar/components/cart/CartContent"
import { ProductsLayout } from "../Components/products/ProductsLayout"
import { Register } from "../Global/components/User/register"

export const Rutas = () => {

    return (
        <Routes>
            <Route path="/" element={<Main /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/collection" element={ <ProductsLayout/> } />
            <Route path="/contact" element={ <Contact /> } />
            <Route path="/categories" element={ <Categories /> } />
            <Route path="/login" element={ <Login/> } />
            <Route path="/user-info" element={ <UserInfo /> } />
            <Route path="/logout" element={ <Logout/> } />
            <Route path="/myAccount" element={ <MyAccount/> } />
            <Route path="/cart" element={ <CartContent /> } />
            <Route path="/register" element={ <Register/> } />
            <Route path='*' element={ <Navigate to='/' /> } />
        </Routes>
    )
}