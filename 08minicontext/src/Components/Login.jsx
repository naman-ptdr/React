import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='user'/>
        <input type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password'/>
        <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login