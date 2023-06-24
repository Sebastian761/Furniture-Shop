import React from 'react'
import { useAuth } from './Context/AuthContext';
import { toast } from 'sonner';

export const Home = () => {

    const { user, logout, loading} = useAuth()
    console.log(user)

    const handleLogout = async () => {
        try {
            await logout()
            toast.success("Logout Sucessfully")
        } catch (error) {
            toast.error(error)
        }

    }

    if (loading) return <h1>Loading</h1>


    return (
        <div>
            <h1>Welcome {user.displayName || user.email}</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}
    