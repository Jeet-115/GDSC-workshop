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
    <div>
      {/* Navbar */}
      <nav className="bg-gray-900 text-white py-4 flex justify-between items-center">
        <div className="ml-4">
          <span className="font-bold">Exclusive</span>
        </div>
        <div>
          <Link to="/" className="mx-4">Home</Link>
          <Link to="/contact" className="mx-4">Contact</Link>
          <Link to="/about" className="mx-4">About</Link>
          <Link to="/register" className="mx-4">Signup</Link>
        </div>
        <div className="mr-4">
          <input type="text" placeholder="Search..." className="mr-2 px-2 py-1 bg-gray-800 text-white rounded-lg" />
          <button className="bg-gray-800 px-3 py-1 rounded-lg">
            <img src="search_icon.png" alt="Search" className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Content */}
      <div className='flex flex-col flex-end items-center justify-center mt-8'>
        {/* Photo and Login Form */}
        <div className="flex items-center">
          {/* Photo on the left */}
          <div className="ml-8 mb-4">
            <img src="your_photo.jpg" alt="Your Photo" className="h-64 w-64 rounded-full" />
          </div>
          {/* Login Form on the right */}
          <div className='flex flex-col  border-2 border-sky-700 rounded-lg p-10 ml-8'>
            <h1 className='text-5xl font-semibold'>Login</h1>
            <p className='my-4'>Enter your details below</p>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className='border-[1px] my-4 bg-gray-200 bg-opacity-50 border-gray-800 outline-none text-3xl p-2' type="email" placeholder='Email' />
            <input value={password} onChange={(e) => setPassword(e.target.value)} className='border-[1px] my-4 bg-gray-200 bg-opacity-50 border-gray-800 outline-none text-3xl p-2' type="password" placeholder='Password' />
            <button onClick={handleLogin} className='mt-4 bg-red-500 rounded-lg py-3'>Login</button>
            <Link to='/register'>
              <p className='mt-2 text-center'>New User ?</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-2 text-center mt-8">
        &copy; Copyright
      </footer>
    </div>
  )
}

export default Loginn