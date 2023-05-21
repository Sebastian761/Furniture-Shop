import { NavbarGroup, NavbarLogo} from "./"
import { NavbarContainer } from "../layouts/NavbarContainer"
import '../styles/NavbarLayout.css'
import { NavbarMenu } from "./NavbarMenu";

export const Navbar = (props) => {

    

    return (
        <NavbarContainer>
            <NavbarLogo />
            <NavbarMenu />
            <NavbarGroup />
        </NavbarContainer>
    )
}
