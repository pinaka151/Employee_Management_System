import React, { useState } from 'react'

const Header = (props) => {
 const LogOutUser = ()=>{
  localStorage.setItem('loggedInUser','')
  props.changeUser('')
  // window.location.reload()
 }
if (props.data) {
    return (
      <div className='flex items-end justify-between head  top-10 '>
        <h1 className='font-medium'>
          Hello!! <br />
          <span className='text-3xl font-semibold'>{props.data.firstName} 👋</span>
        </h1>
        <button onClick={LogOutUser} className='hover2 bg-red-400 border-none cursor-pointer outline-none px-5 py-2 rounded'>
          Log Out
        </button>
      </div>
    );
  }

  // else admin
  return (
    <div className='flex items-end justify-between top-10 '>
      <h1 className='font-medium'>
        Hello!! <br />
        <span className='text-3xl font-semibold'>{props.firstName}👋</span>
      </h1>
      <button onClick={LogOutUser} className='hover2 bg-red-400 border-none cursor-pointer outline-none px-5 py-2 rounded'>
        Log Out
      </button>
    </div>
  );
 
}

export default Header