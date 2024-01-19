import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import{Link} from 'react-router-dom'
import axios from 'axios'

function Login() {
    const[email,setEmail] = useState()
    const[password,setPassword] = useState()
    const navigate = useNavigate()



    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/login',{email,password})
        .then(result => {console.log(result)
        if(result.data=== "success"){
            alert("Your login to Dashboard!");
             navigate("/home")
        }
        })
        .catch(err=>console.log(err))
    }


   

  return (
<div className='flex justify-center items-center h-screen bg-red-500'>
    <div className='bg-red-300 p-6 rounded w-2/4'>
        <h2 className='text-4xl text-gray-900 font-bold mb-4'>Log in</h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
          
            <div className=''>
                <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                    Email
                </label>
                <input
                    type='email'
                    placeholder='Enter the email'
                    autoComplete='off'
                    name='email'
                    className='form-input rounded border py-2 px-3 w-full'
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className=''>
                <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                    Password
                </label>
                <input
                    type='password'
                    placeholder='Enter the password'
                    name='password'
                    className='form-input rounded border py-2 px-3 w-full'
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type='submit' className='bg-green-400 text-white py-2 px-4 rounded-md w-full  hover:bg-green-900'>
                Login
            </button>
        </form>
        <p className='font-semibold mt-4'>If you don't have an account</p>
        <Link to='/register' className='bg-blue-500 text-white py-2 px-4 rounded-md inline-block mt-2 hover:bg-blue-900'>
            Register
        </Link>
    </div>
</div>

  )
}

export default Login