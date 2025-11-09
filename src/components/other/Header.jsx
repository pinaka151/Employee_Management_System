import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between top-10 '>
    <h1 className='font-medium'>Hello!! <br/> <span className='text-3xl font-semibold'>Vipin👋</span> </h1>
    <button className='hover2 bg-red-400 border-none cursor-pointer outline-none px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header