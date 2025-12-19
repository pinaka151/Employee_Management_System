import React, { useContext } from 'react'
import { Authcontext } from '../../context/AuthProvider'

const AllTask = () => {
  const [UserData,setUserData] = useContext(Authcontext)
    
  return (
    <div className='bg-[#1c1c1c] p-5 rounded h-[85%] '>
       <div className='bg-red-400 mb-4 py-10 text-2xl px-14 flex justify-between items-center rounded-xl'>
        <h2 className=' w-1/5'>Employee Name</h2>
        <h3 className=' w-1/5'>New Task</h3>
        <h5 className=' w-1/5'>Active Task</h5>
        <h5 className=' w-1/5'>Completed</h5>
        <h5 className=' w-1/5'>Failed</h5>
         </div>
     <div className='h-[80%]  hide-scrollbar'>
       {UserData.map((elem,idx)=>{
        return <div key={idx} className=' mb-4 py-4 px-14 text-xl flex justify-between font-medium items-center rounded border-2 border-emerald-500'>
                    <h2 className=' w-1/5'>{elem.firstName}</h2>
                    <h3 className=' w-1/5 text-orange-500'>{elem.taskCounts.newTask}</h3>
                    <h5 className=' w-1/5 text-green-500'>{elem.taskCounts.active}</h5>
                    <h5 className=' w-1/5 text-white'>{elem.taskCounts.completed}</h5>
                    <h5 className=' w-1/5 text-red-400'>{elem.taskCounts.failed}</h5>
               </div>

      })}
     </div>
        
        
    </div>
  )
}

export default AllTask