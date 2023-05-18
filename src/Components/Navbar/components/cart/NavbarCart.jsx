import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { alignProperty } from '@mui/material/styles/cssUtils';

const style = {
    display: 'flex',
    alignItems: 'center',
    marginLeft:'20px',
    marginRight: '10px',
    gap: '5px'
}

export const NavbarCart = () => {
    return (
        <div>
            <div style = { style }>
                <ShoppingCartOutlinedIcon/>
                <p>Cart</p> 
            </div>
        </div>
        
    )
}
