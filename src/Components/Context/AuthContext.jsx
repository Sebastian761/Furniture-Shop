import { createContext, useContext, useEffect, useState } from "react"
import {GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import {firebaseAuth, firebaseDb} from '../../Global/Firebase/config/firebase'

export const authContext =  createContext()

export const useAuth = () => {
    const context = useContext(authContext)
    if (!context) throw new Error("There is no auth provider")
    return context
}

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const signup = (email, password) =>  createUserWithEmailAndPassword(firebaseAuth, email, password)

    const login = (email, password) => signInWithEmailAndPassword(firebaseAuth, email, password)

    const logout = () => signOut(firebaseAuth)

    const loginWithGoogle = () => {
        const googleProvider =new GoogleAuthProvider()
        return signInWithPopup(firebaseAuth, googleProvider)
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(firebaseAuth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => unsubscribe()
    }, [])

    return (
        <authContext.Provider 
        value={{
            signup,
            login,
            user,
            logout,
            loading,
            loginWithGoogle
        }}>
            {children}
        </authContext.Provider>
    )
}
