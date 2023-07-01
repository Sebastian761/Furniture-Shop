
import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { dataContext } from "../Context/DataContext";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react"
import axios from "axios"

export const Checkout = () =>{
    const [preferenceId, setPreferenceId] = useState(null)

    initMercadoPago("TEST-19fab056-dc42-40e2-98fb-9ea6d503e96e")

    const {cart} = useContext(dataContext)
    const total = cart.reduce((acc, item)=>acc + item.price * item.quanty , 0)
    const IVA = Math.round(total * 0.18) 
    const shipping = Math.round(total * 0.10)

    const createPreference = async () => {
        try {
            const response = await axios.post("http://localhost:8080/create_preference", {
                description: "Order from Furniture Shop",
                price:  (total + IVA + shipping),
                quantity: 1
            })

            const { id } = response.data
            return id
        } catch (error) {
            console.log(error);
        }
    }

    const handleCheckout = async () => {
        const id = await createPreference()
        if (id) {
            console.log(id);
            setPreferenceId(id)
            console.log(preferenceId);
        }     
    }

    
    const [dropdown1, setDropdown1] = useState(false);
    const [changeText1, setChangeText1] = useState("Province");

    const HandleText1 = (e) => {
        setChangeText1(e);
        setDropdown1(false);
    };


    return (
        <div className="overflow-y-hidden">
            <div className="flex justify-center items-center 2xl:container 2xl:mx-auto lg:py-16 md:py-12 py-9 px-4 md:px-6 lg:px-20 xl:px-44  bg-slate-100">
                <div className="flex w-full sm:w-9/12 lg:w-full flex-col lg:flex-row justify-center items-center lg:space-x-10 2xl:space-x-36 space-y-12 lg:space-y-0">
                    <div className="flex w-full  flex-col justify-start items-start">
                        <div className>
                            <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Check out</p>
                        </div>
                        <div className="mt-12">
                            <p className="text-xl font-semibold leading-5 text-gray-800">Shipping Details</p>
                        </div>
                        <div className="mt-8 flex flex-col justify-start items-start w-full space-y-8 ">
                            <input className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-400 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="First Name" />
                            <input className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-400 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Last Name" />
                            <input className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-400 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Address" />
                            <div className="flex justify-between flex-col sm:flex-row w-full items-start space-y-8 sm:space-y-0 sm:space-x-8">
                                <div className="relative w-full">
                                    <p id="button1" className=" px-2 border-b border-gray-400 text-left leading-4 text-base text-gray-600 py-4 w-full">{changeText1}</p>
                                    <button onClick={() => setDropdown1(!dropdown1)} className="focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-full cursor-pointer absolute bottom-4 right-0">
                                        <svg id="close" className={` transform ${dropdown1 ? "rotate-180" : ""}  `} width={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 6L8 10L4 6" stroke="#4B5563" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                    <div className={`shadow absolute z-10 bg-white top-10  w-full mt-3 ${dropdown1 ? "" : "hidden"}`}>
                                        <div className="flex flex-col  w-full overflow-auto h-[15vh]">
                                            <p tabIndex={0} onClick={() => HandleText1("Buenos Aires")} className="focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left  text-base text-gray-600 py-2 w-full">Buenos Aires</p>
                                            <p tabIndex={0} onClick={() => HandleText1("Buenos Aiires")} className="focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left  text-base text-gray-600 py-2 w-full">Misiones</p>
                                            <p tabIndex={0} onClick={() => HandleText1("Santa Fé")} className="focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left  text-base text-gray-600 py-2 w-full">Santa Fé</p>
                                            <p tabIndex={0} onClick={() => HandleText1("Entre Rios")} className="focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left  text-base text-gray-600 py-2 w-full">Entre Rios</p>
                                            <p tabIndex={0} onClick={() => HandleText1("Mendoza")} className="focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left  text-base text-gray-600 py-2 w-full">Mendoza</p>
                                            <p tabIndex={0} onClick={() => HandleText1("Tucuman")} className="focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left  text-base text-gray-600 py-2 w-full">Tucuman</p>
                                            <p tabIndex={0} onClick={() => HandleText1("Salta")} className="focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left  text-base text-gray-600 py-2 w-full">Salta</p>
                                            <p tabIndex={0} onClick={() => HandleText1("Jujuy")} className="focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left  text-base text-gray-600 py-2 w-full">Jujuy</p>
                                            <p tabIndex={0} onClick={() => HandleText1("Corrientes")} className="focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left  text-base text-gray-600 py-2 w-full">Corrientes</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <input className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-400 leading-4 text-base placeholder-gray-600 pt-4 pb-3   w-full" type="text" placeholder="Zip Code" />
                                </div>
                            </div>
                            <input className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-400 leading-4 text-base placeholder-gray-600 py-4   w-full" type="text" placeholder="Phone Number" />
                        </div>
                        <button onClick={handleCheckout} className="focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 mt-8 text-base font-medium focus:ring-2 focus:ring-ocus:ring-gray-800 leading-4 hover:bg-black py-4 w-full md:w-4/12 lg:w-full text-white bg-gray-800">Proceed to payment</button>
                        <div id="wallet_container">
                        { preferenceId && <Wallet initalization={{ preferenceId: preferenceId }} />}
                        </div>
                        <div className="mt-4 flex justify-start items-center w-full">
                            <Link to={'/cart'}>
                                <button className="text-base leading-4 underline focus:outline-none focus:text-gray-500  hover:text-gray-800 text-gray-600">Back to my cart</button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-start bg-gray-50 w-full p-6 md:p-14 shadow-xl">
                        <div>
                            <h1 className="text-2xl font-semibold leading-6 text-gray-800">Order Summary</h1>
                        </div>
                        <div className="flex mt-7 flex-col items-end w-full space-y-6">
                            <div className="flex justify-between w-full items-center">
                                <p className="text-lg leading-4 text-gray-600">Total Charges</p>
                                <p className="text-lg font-semibold leading-4 text-gray-600">${total}</p>
                            </div>
                            <div className="flex justify-between w-full items-center">
                                <p className="text-lg leading-4 text-gray-600">Shipping charges</p>
                                <p className="text-lg font-semibold leading-4 text-gray-600">${shipping}</p>
                            </div>
                            <div className="flex justify-between w-full items-center">
                                <p className="text-lg leading-4 text-gray-600">Taxes</p>
                                <p className="text-lg font-semibold leading-4 text-gray-600">{IVA}</p>
                            </div>
                            <div className="flex justify-between w-full items-center">
                                <p className="text-lg leading-4 text-gray-600">Discount </p>
                                <p className="text-lg font-semibold leading-4 text-gray-600">0</p>
                            </div>
                            <div className="flex justify-between w-full items-center">
                                <p className="text-lg leading-4 text-gray-600">Sub total </p>
                                <p className="text-lg font-semibold leading-4 text-gray-600">${total + IVA + shipping}</p>
                            </div>
                        </div>
                        <div className="flex justify-between w-full items-center mt-32">
                            <p className="text-xl font-semibold leading-4 text-gray-800">Estimated Total </p>
                            <p className="text-lg font-semibold leading-4 text-gray-800">${total  + IVA + shipping}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
