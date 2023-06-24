import { useState } from 'react'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import '../styles/NavbarLayout.css'
import { Link } from 'react-router-dom';


export const NavbarMenu = () => {

    const [menu, setMenu] = useState(false)

    const toggleMenu = () => {
        setMenu( !menu )
        console.log('click')
    }    

    return (
        <div>
            <button onClick={ toggleMenu } className="header__button" >
                <MenuOutlinedIcon className="burger__menu" />
            </button>
            <nav className={`header__nav ${ menu ? 'isActive' : '' }`}>
                <ul className="navbar__ul">
                    <Link to={'/about'} className="navbar-link">About Us</Link>
                    <Link to={'/collection'}className="navbar-link">Collection</Link>
                    <Link to={'/contact'}className="navbar-link">Contact</Link>
                </ul>
            </nav>
        </div>
    )
}


// className={` ${ menu ? 'isActive' : '' }`}