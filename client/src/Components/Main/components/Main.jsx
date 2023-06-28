import React from 'react'
import { MainUp } from './MainUp/MainUp'
import { Products } from '../../products/Products'
import '../../../Global/components/Collection/styles/collection.css'
import { MainCenter } from './MainCenter/MainCenter'

export const Main = () => {
    return (
        <>
            <MainUp />
            <MainCenter />
        </>
) 
}
