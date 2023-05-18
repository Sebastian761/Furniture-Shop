import { Link } from "react-router-dom"
import '../../../styles/NavbarLinks.css'

export const NavbarItems = () => {

    const style = {
        display: 'flex',
        gap: '30px',
        marginLeft: '20.5%'
    }

    return (
        <div  style={ style }>
            <Link to={'/about'} className="navbar-link">About Us</Link>
            <Link to={'/collection'}className="navbar-link">Collection</Link>
            <Link to={'/contact'}className="navbar-link">Contact</Link>
            <Link to={'/categories'}className="navbar-link">Categories</Link>
        </div>
    )
}