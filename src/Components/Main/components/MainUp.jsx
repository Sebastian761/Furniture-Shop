import { MainImage } from "./MainImage"
import { MainText } from "./MainText"
import { MainUpLayout } from "../layouts/MainUpLayout"

export const MainUp = () => {
    return (
        <MainUpLayout>
            <h3 className="new__text">New arrivals</h3>
            <div className="mainUp__container--info" >
                <MainText />
                <MainImage />
            </div>
        </MainUpLayout>
    
    )
}