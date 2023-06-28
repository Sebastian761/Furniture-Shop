import React from 'react'
import { Link } from 'react-router-dom';
import { CartElements } from './CartElements'
import { CartTotal } from './CartTotal'

export const CartLayout = () => {
    return (
        <section className='background'>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="mx-auto max-w-3xl">
                    <header className="text-center">
                        <h1 className="text-xl font-bold text-gray-900 sm:text-3xl title">Your Cart</h1>
                    </header>

                    <CartElements />

                    <div className="mt-8">
                        <ul className="space-y-4">
                            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                                <div className="w-screen max-w-lg space-y-4">
                                    
                                        <CartTotal />

                                        <div className="flex justify-end">
                                        </div>
                                        <div className="flex justify-end">
                                            <Link to={'/checkout'} >
                                                <button className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600">Checkout</button>
                                            </Link>
                                        </div>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
