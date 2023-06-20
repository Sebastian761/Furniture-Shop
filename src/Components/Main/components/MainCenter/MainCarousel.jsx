import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/MainUp.css'

export const MainCarousel = () => {
    return (
			<div className="bg-gradient-to-b from-slate-200 to-indigo-500 to-indigo-500 flex items-center flex-col">
				<div className='w-[95%] border-t-2 border-slate-500'></div>
				<header className='flex justify-center mb-2'>
					<div className='text-center'>
						<h2 className="text-xl pt-10 font-bold text-gray-900 sm:text-3xl">Big Savings in Our Offer Section - Shop Now!</h2>
						<p className="max-w-md mt-4 text-gray-500 m-auto">
							Take advantage of our offers! Exclusive discounts on high-quality products for a limited time.
						</p>
					</div>
				</header>

				<ul className="grid grid-flow-row justify-center items-center text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 group relative w-[100%]">
					<li  className=' sm:h-[420px] w-[320px] flex items-center mx-auto sm:my-8 hover:brightness-75  transition-all duration-1'>
								<div className=' relative flex'>
									<img alt="product__image" src="/src/assets/down-table.jpg" className='hover:shadow-2xl  back'/>
									<div className="h-[55%] absolute inset-y-[45%] w-[100%] flex flex-col items-start justify-center px-6">
										<h3 className="text-xl font-medium text-slate-900">Skinny Jeans Blue</h3>
										<p className="mt-1.5 max-w-[40ch] text-xs text-slate-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi dicta impedit aperiam ipsum!</p>
										<Link to={'/collection'} className="mt-3 inline-block bg-slate-900 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">Shop Now</Link>
									</div>
								</div>
								
							</li>
							
							<li  className='sm:h-[420px] w-[320px] flex justify-center items-center mx-auto max-sm:my-8 hover:brightness-75  transition-all duration-1'>
								<div className=' relative'>
									<img src="/src/assets/furtn.jpg" alt="product__image" className='hover:shadow-2xl'/>
									<div className="h-[55%]  absolute inset-y-[45%] w-[100%] flex flex-col items-start justify-center px-6">
										<h3 className="text-xl font-medium text-slate-900">Skinny Jeans Blue</h3>
										<p className="mt-1.5 max-w-[40ch] text-xs text-slate-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi dicta impedit aperiam ipsum!</p>
										<Link to={'/collection'} className="mt-3 inline-block bg-slate-900 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">Shop Now</Link>
									</div>
								</div>
							</li>
							
							<li  className=' sm:h-[420px] w-[320px] flex justify-center items-center mx-auto max-sm:my-8 hover:brightness-75 transition-all duration-1'>
								<div className='  relative'>
									<img src="/src/assets/lamp.jpg" alt="product__image" className='hover:shadow-2xl'/>
									<div className="h-[55%] w-[100%] absolute inset-y-[45%] flex flex-col items-start justify-center px-6">
										<h3 className="text-xl font-medium text-slate-900">Skinny Jeans Blue</h3>
										<p className="mt-1.5 max-w-[40ch] text-xs text-slate-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi dicta impedit aperiam ipsum!</p>
										<Link to={'/collection'} className="mt-3 inline-block bg-slate-900 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">Shop Now</Link>
									</div>
								</div>
							</li>
							
							<li className='sm:h-[420px] w-[320px] flex justify-center items-center mx-auto max-sm:my-8 hover:brightness-75  transition-all duration-1'>
								<div className='  relative'>
									<img src="/src/assets/table.png" alt="product__image" className='hover:shadow-2xl'/>
									<div className=" h-[55%] w-[100%] absolute inset-y-[45%] flex flex-col items-start justify-center px-6 ">
										<h3 className="text-xl font-medium text-slate-900">Skinny Jeans Blue</h3>
										<p className="mt-1.5 max-w-[40ch] text-xs text-slate-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi dicta impedit aperiam ipsum!</p>
										<Link to={'/collection'} className="mt-3 inline-block bg-slate-900 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">Shop Now</Link>
									</div>
								</div>
							</li>
							
				</ul>
			</div>
		
    )
}
