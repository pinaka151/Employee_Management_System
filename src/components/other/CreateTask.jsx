import React from 'react'
import { FaArrowCircleLeft } from "react-icons/fa";

const CreateTask = () => {
  return (
   <div className="py-10 ">
        <form className="py-5 text-xl px-8 w-full h-130 bg-[#1c1c1c] border-[1px] border-transparent  rounded-md hover:border-blue-400 hover:border-[1px]">
          <div className="flex w-full overflow-hidden">
          <div className="w-1/2 ">
          <div className="flex pb-7 pt-0 text-2xl items-center gap-2">
            <FaArrowCircleLeft  className="cursor-pointer"/>
                <h1>  Create Task </h1>
          </div>
         
          
          <div>
            <h3>Task Title</h3>
            <input type="text" placeholder="Make a UI design" />
          </div>

          

          <div className="mt-4" >
            <h3>Date</h3>
            <input type="Date" />
          </div>

          <div className="mt-4" >
            <h3>Asign to</h3>
            <input type="text" placeholder="Employee Name" />
          </div>

          <div className="mt-4" >
            <h3>Category</h3>
            <input type="text" placeholder="Design,Development,etc..." />
          </div>
          </div>


         <div className="w-1/2 flex flex-col flex-wrap overflow-hidden items-center py-8 ">

          <div className="mt-4" >
            <h3>Description</h3>
            <textarea className="w-[34vw] h-[260px] mt-3 p-3 rounded-lg border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" name="" id=""  placeholder="Describe the task Here..."></textarea>
          </div>
          <button className="bottom-0 w-[34vw] hover bg-blue-400 border-none  my-10 cursor-pointer outline-none px-5 py-2 rounded-md">Create Task</button>
          </div>
          </div>
        </form>
      </div>
  )
}

export default CreateTask