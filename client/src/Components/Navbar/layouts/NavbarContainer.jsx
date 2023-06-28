
export const NavbarContainer= ({ children }) => {

    // const style = {
    //     height: '80px',
    //     display: 'grid',
    //     gridTemplateRows: 'auto',
    //     gridTemplateColumns:'auto 2fr auto auto auto',
    //     gridTemplateAreas: 'logo menus toggler',
    //     alignItems:'center',
    //     justifyItems:'center',
    //     padding:'0 20px',
    //     gap: '15px',
    //     paddingBottom: '10px',
    //     borderBottom: '1px solid hsl(195.83deg 40.86% 76.75%)'
    // }

    return (
        <header className="header">
            { children }
        </header>
    )
}

