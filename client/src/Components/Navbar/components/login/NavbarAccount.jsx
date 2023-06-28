import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Link } from 'react-router-dom';

export const NavbarAccount = () => {
    return (
        <div>
            <div  className='header__account'>
                <PersonOutlineOutlinedIcon/>
                <Link to={'/login'} className="account-link">Login</Link>
            </div>
        </div>
    )
}
