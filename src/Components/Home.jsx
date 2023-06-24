import React from 'react'
import { useAuth } from './Context/AuthContext';
import { toast } from 'sonner';

export const Home = () => {

    const { user, logout, loading} = useAuth()
    
    const handleLogout = async () => {
        await logout()
        toast.success("Logout Sucessfully")

    }

    if (loading) return <h1>Loading</h1>


    return (
        <div>
            <h1>Welcome {user.email}</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}
    