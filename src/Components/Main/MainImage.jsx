import React from 'react'

export const MainImage = () => {

    const style = {
        
        width:'400px',
        height:'400px',
        backgroundImage: 'url("/src/assets/couch-removebg.png")',
        backgroundSize: 'cover'
    }

    return (
        <div style={style}>MainImage</div>
    )
}
