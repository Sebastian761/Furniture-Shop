import { NavbarCart } from "./cart/NavbarCart"
import { NavbarAccount } from "./login/NavbarAccount"

export const NavbarGroup = () => {
    return (
        <div className="header__group">
            <NavbarAccount />
            <NavbarCart />
        </div>
    )
}
