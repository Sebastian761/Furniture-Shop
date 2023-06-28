import { Link } from "react-router-dom"

export const About = () => {
    return (
        <section>
            <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                    <div className="relative z-10 lg:py-16">
                        <div className="relative h-64 sm:h-80 lg:h-full">
                            <img alt="furniture" src="/src/assets/flex.jpg" className="absolute inset-0 h-full w-full object-cover"/>
                        </div>
                    </div>
                    <div className="relative flex items-center bg-gray-100">
                        <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>
                        <div className="p-8 sm:p-16 lg:p-24">
                            <h2 className="text-2xl font-bold sm:text-3xl">¡Keep it simple!</h2>
                            <p className="mt-4 text-gray-600">"We're here for you". In our online store, you can find everything you need to remodel your home and make it look its best. We offer you an easy, fast, and secure shopping experience, with high-quality products, fast shipping, and personalized customer service. Discover why we are the best option for your online shopping needs. </p>
                            <Link to={'/collection'} className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">Go to shop</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
