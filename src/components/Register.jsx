import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Register( {isLogin} ) {
  /* 
  */
  const [name, setName] = useState("")
  const [pnumber, setPnumber] = useState("")
  const [password, setPassword] = useState("")
  const handleRegister = () => {
    console.log("login button pressed")
    console.log("Name : ",name)
    console.log("Phone number : ",pnumber)
    console.log("Password : ",password)
  }
  return (
    <div className='flex flex-col bg-blue-700 w-full items-center justify-center h-screen'>
        <div className='flex flex-col border-4 border-sky-700 rounded-lg p-10 bg-blue-500'>
            <h1>{isLogin ? "Logged in" : "User need to Log in" }</h1>
            <h1 className='text-5xl font-semibold'>Create an account</h1>
            <p className='my-4'>Enter your details below</p>
            <input value={name} onChange={(e)=>(setName(e.target.value))} className='border-[1px] my-4 bg-gray-200 bg-opacity-50 border-b-2 outline-none text-3xl p-2 focus:border-blue-600 rounded-lg' type="text" placeholder='Name'/>
            <input value={pnumber} onChange={(e)=>(setPnumber(e.target.value))} className='border-[1px] my-4 bg-gray-200 bg-opacity-50 border-b-2 outline-none text-3xl p-2 focus:border-blue-600 rounded-lg' type="text" placeholder='Phone Number'/>
            <input value={password} onChange={(e)=>(setPassword(e.target.value))} className='border-[1px] my-4 bg-gray-200 bg-opacity-50 border-b-2 outline-none text-3xl p-2 focus:border-blue-600 rounded-lg' type="password" placeholder='Password'/>
            <button onClick={handleRegister} className='mt-4 bg-red-500 rounded-lg py-3 focus:bg-green-500'>Create Account</button>
            {isLogin? <h1>User is logged in</h1> : 
              <Link to='/'>
              <p className='mt-2 text-center'>Already Registered ? Login</p>
              </Link>
            }
        </div>
    </div>
  )
}

export default Register