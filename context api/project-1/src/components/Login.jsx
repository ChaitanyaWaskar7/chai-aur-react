import React,{useState , useContext} from 'react'
import UserContext from '../Context/UserContext'

const Login = () => {
    const [username, setUsername] = useState('')
    const [passowrd, setPassowrd] = useState('')

    const {setUser} = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username , passowrd})
    }
  return (
      <div>
          <h2>Login</h2>
          <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder='username' />
          <input type="text" value={passowrd} onChange={(e)=>{setPassowrd(e.target.value)}} placeholder='password' />
          <button onClick={handleSubmit()}>Submit</button>
      </div>
  )
}

export default Login