import { MainImage } from "./MainImage"
import { MainText } from "./MainText"
import '../../styles/Main.css'

export const MainContainer = () => {

    const style = {
        position:'absolute',
        width: '150px',
        top:'22%',

        textAlign: 'center',
        fontWeight: '200',
        letterSpacing: '3px',
        color: 'black',

        
    }

    const style1 = {
        display:'flex',
        justifyContent:'center',
        gap:'100px'
    }

    return (
        <div style={style1}>
            <h3 style={style}>New arrivals</h3>
            <div className="main__container" >
                <MainText />
                <MainImage />
            </div>
        </div>
    )
}