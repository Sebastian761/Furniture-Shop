import { createContext, useContext } from "react"
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {firebaseAuth} from '../../Global/Firebase/config/firebase'

export const authContext =  createContext()

export const useAuth = () => {
    const context = useContext(authContext)
    if (!context) throw new Error("There is no auth provider")
    return context
}

export const AuthProvider = ({ children }) => {

    const signup = (email, password) => createUserWithEmailAndPassword(firebaseAuth, email, password)

    return (
        <authContext.Provider value={{ signup }}>
            {children}
        </authContext.Provider>
    )
}
