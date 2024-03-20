import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Loginn({setIsLogin}) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleLogin = () => {
    console.log("login button pressed")
    console.log("Email : ",email)
    console.log("Password : ",password)
    setIsLogin(true)
  }
  return (
    <div className='flex flex-col bg-sky-200 w-full items-center justify-center h-screen'>
        <div className='flex flex-col border-2 border-sky-700 rounded-lg p-10'>
            <h1 className='text-5xl font-semibold'>Login</h1>
            <p className='my-4'>Enter your details below</p>
            <input value={email} onChange={(e)=>(setEmail(e.target.value))} className='border-[1px] my-4 bg-gray-200 bg-opacity-50 border-gray-800 outline-none text-3xl p-2' type="email" placeholder='Email'/>
            {/* <h1>{email}</h1> */}
            <input value={password} onChange={(e)=>setPassword(e.target.value)} className='border-[1px] my-4 bg-gray-200 bg-opacity-50 border-gray-800 outline-none text-3xl p-2' type="password" placeholder='Password'/>
            {/* <h1>{password}</h1> */}
            
            <button onClick={handleLogin} className='mt-4 bg-red-500 rounded-lg py-3'>Login</button>
            <Link to='/register'>
            <p className='mt-2 text-center'>New User ?</p>
            </Link>
        </div>
    </div>
  )
}

export default Loginn