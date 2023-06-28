import { Navigate, Route, Routes } from "react-router-dom"
import { Contact,  About } from "../Global/components"
import { Login, UserInfo, Logout} from "../Global/components/User"
import { Main } from "../Components/Main/components"
import { CartContent } from "../Components/Navbar/components/cart/CartContent"
import { ProductsLayout } from "../Components/products/ProductsLayout"
import { Register } from "../Global/components/User/register"
import { Home } from "../Components/Home"
import { ProtectedRoute } from "../Global/components/User/ProtectedRoute"
import { Checkout } from "../Components/Checkout/Checkout"

export const Rutas = () => {

    return (
        <Routes>
            <Route path="/" element={<Main /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/collection" element={ <ProductsLayout/> } />
            <Route path="/contact" element={ <Contact /> } />
            <Route path="/login" element={ <Login/> } />
            <Route path="/user-info" element={ <UserInfo /> } />
            <Route path="/logout" element={ <Logout/> } />
            <Route path="/cart" element={ <CartContent /> } />
            <Route path="/register" element={ <Register/> } />
            <Route path="/checkout" element={<Checkout />}></Route>
            
                <Route path="/home" element={
                    <ProtectedRoute>
                        <Home/>
                    </ProtectedRoute> 
                } />
        
            <Route path='*' element={ <Navigate to='/' /> } />
        </Routes>
    )
}