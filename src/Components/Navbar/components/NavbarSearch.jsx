import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export const NavbarSearch = () => {

    const style = {
        display: 'flex',
        alignItems: 'center',
        gap: '5px'
    }

    return (
        <div>
        <div style = { style }>
            <SearchOutlinedIcon/>
            <p>Search</p> 
        </div>
    </div>
    )
}