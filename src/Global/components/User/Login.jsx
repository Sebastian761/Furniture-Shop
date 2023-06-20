import React from 'react'
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect } from 'firebase/auth'
import {  firebaseAuth } from '../../Firebase/config/firebase'
import GoogleButton from 'react-google-button'
import { Link } from 'react-router-dom'

export const Login = () => {

    async function handleOnclick() {
        const googleProvider = new GoogleAuthProvider()
        await signInWithGoogle(googleProvider)
        console.log("tuki")
    }

    async function signInWithGoogle(googleProvider) {
        try {
            const res = await signInWithPopup(firebaseAuth, googleProvider)
            console.log(res)
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <section className="relative flex flex-wrap lg:h-screen lg:items-center bg-slate-100">
            <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>
                    <p className="mt-4 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque ipsa culpa autem, at itaque nostrum!</p>
                </div>
                <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                    <div>
                        <label className="sr-only">Email</label>
                        <div className="relative">
                            <input type="email" className="w-full rounded-lg border-gray-400 p-4 pe-12 text-sm shadow-sm" placeholder="Enter email"/>
                        </div>
                    </div>
                    <div>
                        <label className="sr-only">Password</label>
                        <div className="relative">
                            <input type="password" className="w-full rounded-lg border-gray-400 p-4 pe-12 text-sm shadow-sm" placeholder="Enter password"/>
                        </div>
                    </div>
                    <div  onClick={handleOnclick }>
                        <GoogleButton>Login with Google</GoogleButton>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500"> No account?
                            <Link to={'/register'} className="underline" href="">Sign up</Link>
                        </p>
                        <button type="submit" className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white">Sign in</button>
                    </div>
                </form>
            </div>
            <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                <img alt="Welcome" src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" className="absolute inset-0 h-full w-full object-cover"/>
            </div>
        </section>
    )
}
