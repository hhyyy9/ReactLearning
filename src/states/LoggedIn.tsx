import {useState} from 'react'

export const LoggedIn = () => {
    const [isLoginIn, setIsLoginIn] = useState(false)
    const handleLogin = () => {
        setIsLoginIn(true)
    }
    const handleLogout = () => {
        setIsLoginIn(false)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is {isLoginIn ? 'logged in' : 'logged out'}</div>
        </div>
    )
}