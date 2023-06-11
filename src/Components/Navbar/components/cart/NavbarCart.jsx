import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { Badge } from '@mui/material';
import { useContext } from 'react';
import { dataContext } from '../../../Context/DataContext';

export const NavbarCart = () => {

    const {cart} = useContext(dataContext)
    const itemQuanty = cart.reduce((acc, item) => acc + item.quanty, 0)

    return (
        <div>
            <Link to={'/cart'}>
                <div className='header__cart'>
                <Badge badgeContent={itemQuanty} color="info">
                    <ShoppingCartOutlinedIcon />
                </Badge>
                    <p>Cart</p> 
                </div>
            </Link>
        </div>  
        
    )
}
