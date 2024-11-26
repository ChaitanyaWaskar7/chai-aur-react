import React, { useState, useContext } from 'react'
import UserContext from '../Context/UserContext'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')  // Fixed typo here

    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        setUser({ username, password }) // Use the correct state variable name here
    }

    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)} // Correct input handler
                placeholder="username"
            />
            <input
                type="password"
                value={password} // Use the correct state variable name here
                onChange={(e) => setPassword(e.target.value)} // Correct input handler
                placeholder="password"
            />
            <button onClick={handleSubmit}>Submit</button> {/* Pass function reference, not invoke */}
        </div>
    )
}

export default Login
