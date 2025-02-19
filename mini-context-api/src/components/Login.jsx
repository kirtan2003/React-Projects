import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');
    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

  return (
    <div className='flex flex-col items-center justify-center'>
        <h2 className='bg-green-500 m-10 p-5 text-lg w-full'>Login</h2>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username' className=' m-4'/>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' className='m-4 '/>
        <button onClick={handleSubmit} className='bg-blue-400 p-3 rounded-md'>Submit</button>
    </div>
  )
}

export default Login
