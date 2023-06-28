import { useContext } from 'react'
import { dataContext } from '../../../Context/DataContext'

export const CartTotal = () => {
    const {cart} = useContext(dataContext)
    const total = cart.reduce((acc, item)=>acc + item.price * item.quanty , 0)
    const IVA =Math.round(total * 0.18) 
    return (
        <dl className="space-y-0.5 text-sm text-gray-700">
            <div className="flex justify-between">
                <dt>Subtotal</dt>
                <dd>$ {total}</dd>
            </div>
            <div className="flex justify-between">
                <dt>IVA</dt>
                <dd>$ {IVA}</dd>
            </div>
            <div className="flex justify-between !text-base font-medium">
                <dt>Total</dt>
                <dd>$ {total + IVA}</dd>
            </div>
        </dl>
    )
}
