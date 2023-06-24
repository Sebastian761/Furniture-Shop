import { NavbarSearch } from "./NavbarSearch"
import { NavbarCart } from "./cart/NavbarCart"
import { NavbarAccount } from "./login/NavbarAccount"

export const NavbarGroup = () => {
    return (
        <div className="header__group">
            <NavbarCart />
        </div>
    )
}
