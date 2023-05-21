import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Link } from 'react-router-dom';

export const NavbarAccount = () => {

    const style = {
        display: 'flex',
        alignItems: 'center',
        marginLeft:'20px',
        gap: '5px'
    }

    return (
        <div>
            <div  style = { style }>
                <PersonOutlineOutlinedIcon/>
                <Link to={'/myAccount'} className="account-link">My account</Link>
            </div>
        </div>
    )
}
