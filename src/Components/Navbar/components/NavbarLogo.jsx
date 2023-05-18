import { Height } from "@mui/icons-material"

export const NavbarLogo = () => {

    const style = {
        backgroundImage: 'url("/src/assets/logo.PNG")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width:' 64px',
        height: '64px'
    }

    return (
        <div style={ style }></div>
    )
}