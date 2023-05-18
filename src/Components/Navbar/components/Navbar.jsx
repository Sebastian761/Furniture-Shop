import { NavbarItems, NavbarLogo, NavbarSearch } from "./"
import { NavbarLayout } from "../layouts"
import { NavbarCart } from "./cart/NavbarCart"
import { NavbarAccount } from "./login/NavbarAccount"

export const Navbar = (props, props1) => {

    return (
        <NavbarLayout>
            <NavbarLogo />
            <NavbarItems { ...props }/>
            <NavbarSearch />
            <NavbarAccount { ...props1 } />
            <NavbarCart />
        </NavbarLayout>
    )
}
