import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../Context/AuthContext';

export const NavbarAccount = () => {
    const { user } = useAuth()
    if (user) return <div className='header__account'>
        <PersonOutlineOutlinedIcon/>
        <Link to={'/home'}>Home</Link>
    </div>

    return (
        <div>
            <div  className='header__account'>
                <PersonOutlineOutlinedIcon/>
                <Link to={'/login'} className="account-link">Login</Link>
            </div>
        </div>
    )
}
