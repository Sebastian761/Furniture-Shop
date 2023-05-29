import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { Badge } from '@mui/material';

export const NavbarCart = () => {
    return (
        <div>
            <Link to={'/cart'}>
                <div className='header__cart'>
                <Badge badgeContent={4} color="info">
                    <ShoppingCartOutlinedIcon />
                </Badge>
                    <p>Cart</p> 
                </div>
            </Link>
        </div>
        
    )
}
