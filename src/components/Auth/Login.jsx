import React, { useState } from 'react'

const Login = ({handlelogin}) => {



const[Email,SetEmail] = useState('')
const[Pass,SetPassword] = useState('')



  const SubmitHandler = (e)=>{
    e.preventDefault()
    handlelogin(Email,Pass)
    // console.log("Email is : ",Email)
    // console.log("Password is : ",Pass)

    SetEmail("")
    SetPassword("")
  }

  return (
    <div className='border-1 border-white flex h-screen w-screen justify-center  items-center'>
      <div className="border-2 w-2xl h-[40] img rounded-2xl border-emerald-600 flex justify-center items-center py-40">
        <form onSubmit={(e)=>{
           SubmitHandler(e)
        }} className='flex flex-col items-center justify-center gap-3'>
          <input
          value={Email}
          onChange={(e)=>{
            SetEmail(e.target.value)       
            }}
          required
            className="border-2 outline-none  border-emerald-600 text-xl px-5 py-3  rounded-full placeholder:text-gray-300"
            type="text"
            placeholder='Enter Your Email'
          />
          <input
          value={Pass}
          onChange={(e)=>{
             SetPassword(e.target.value)
          }}
          required
            className="border-2 outline-none border-emerald-600 text-xl mt-3 px-5 p-3 rounded-full placeholder:text-gray-300"
            type="password"
            placeholder='Enter Password'
          />
          <button className='  input mt-5  w-[100%] border-none p-2.5 text-gray-100 cursor-pointer rounded-[18px] outline-none bg-emerald-600 text-xl'> Log In </button>
        </form>
      </div>
    </div>
  )
}

export default Login
