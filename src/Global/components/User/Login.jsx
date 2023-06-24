import GoogleButton from 'react-google-button'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../../../Components/Context/AuthContext'
import { toast, Toaster } from 'sonner'

export const Login = () => {

    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const { login, loginWithGoogle } = useAuth()
    const navigate = useNavigate()
    const [errorcito, setErrorcito] = useState()

    const handleChange = ({ target: { name, value} })=> {
        setUser({...user, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrorcito(' ')
        try {
            await login(user.email, user.password)
            navigate("/home")
            toast.success("Successfully login")
        }   catch (error) {
            if (error.code === "auth/wrong-password" ) {
                    toast.error('Wrong password')
                } else if (error.code === "auth/user-not-found") {
                    toast.error("User not found")
                }
            }
        }

        const handleGoogleSignIn = async () => {
            try {
                await loginWithGoogle()
                toast.success("Login with Google successfully")
                navigate('/home')
            } catch (error) {
                toast.error(error)
            }
        }

    return (
        <section className="relative flex flex-wrap lg:h-screen lg:items-center bg-slate-100">
            <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>
                    <p className="mt-4 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque ipsa culpa autem, at itaque nostrum!</p>
                </div>
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
                    <div className='flex justify-between items-center'>
                        <GoogleButton onClick={handleGoogleSignIn}>Login with Google</GoogleButton>
                        <div className="text-sm text-gray-500 "> <p className='inline px-2nnnnn'>No account?</p> 
                            <Link to={'/register'} className="underline inline" href="">Sign up</Link>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <Toaster position="bottom-right" richColors/>
                        <button type="submit" className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white">Login</button>
                    </div>
                </form>
            </div>
            <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                <img alt="Welcome" src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" className="absolute inset-0 h-full w-full object-cover"/>
            </div>
        </section>
    )

    }
