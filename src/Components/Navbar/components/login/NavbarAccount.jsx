import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Link } from 'react-router-dom';

export const NavbarAccount = () => {

    const style = {
        display: 'flex',
        alignItems: 'center',
        marginLeft:'20px',
        gap: '5px'
    }

    console.log('sirve')

    return (
        <div>
            <div  style = { style }>
                <PersonOutlineOutlinedIcon/>
                <Link to={'/myAccount'} className="navbar-link">My account</Link>
            </div>
        </div>
    )
}
