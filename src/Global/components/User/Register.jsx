import { useState } from 'react'
import { useAuth } from '../../../Components/Context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { toast, Toaster } from 'sonner'

export const Register = () => {

    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const { signup } = useAuth()
    const navigate = useNavigate()
    const [errorcito, setErrorcito] = useState()

    const handleChange = ({target: {name, value}})=> {
        setUser({...user, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorcito(' ')
        try {
            await signup(user.email, user.password)
            navigate("/")
            toast.success("Successfully register")
        } catch (error) {
            if (error.code=== "auth/email-already-in-use" ) {
                toast.error('Email already in use')
            } else if (error.code=== "auth/weak-password") {
                toast.error("Password too weak")
            }
        }
    };

    return (
        <div className="mx-auto max-w-screen-xl my-24 px-4 py-16 sm:px-6 lg:px-8 bg-slate-100 shadow-xl">
            <div className="mx-auto max-w-lg">
                <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Get started today</h1>
                <p className="mx-auto mt-4 max-w-md text-center text-gray-500"> Create an account on our e-commerce and enjoy online shopping.</p>
                <form 
                    onSubmit={handleSubmit}
                    className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-2xl sm:p-6 lg:p-8 bg-white">
                    <p className="text-center text-lg font-medium">Sign up to your account</p>
                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>
                        <div className="relative">
                            <input 
                                type="email" 
                                name='email' 
                                onChange={handleChange} 
                                className="w-full rounded-lg border-gray-4200 p-4 pe-12 text-sm shadow-sm" 
                                placeholder="Enter email"/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>
                        <div className="relative">
                            <input 
                                type="password" 
                                name='password' 
                                onChange={handleChange} 
                                className="w-full rounded-lg border-gray-400 p-4 pe-12 text-sm shadow-sm" 
                                placeholder="Enter password"/>
                        </div>
                    </div>
                    <div>
                        <Toaster position="bottom-right" richColors/>
                        <button type="submit" className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white">Sign up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
