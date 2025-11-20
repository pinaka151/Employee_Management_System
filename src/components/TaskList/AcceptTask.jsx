import React from 'react'

const AcceptTask = ({data}) => {
  console.log(data)
  return (
    <div className="flex-shrink-0 h-full w-[350px] bg-red-300 rounded-xl p-3">
              <div className="flex justify-between items-center">
                <h3 className='bg-red-500 px-3 py-1 rounded text-sm'>{data.category}</h3>
                <h4>{data.date}</h4>
              </div>
              <h2 className='mt-5 text-xl font-semibold text-[#333333]'>{data.title}</h2>
              <p className='h-30 hide-scrollbar overflow-y-auto text-sm mt-3 text-[#333333]'>{data.description}</p>
              <div className="flex justify-between mt-2 ">
                <button className='bg-green-500 py-2 px-2 rounded text-sm cursor-pointer' >Mark as Completed</button>
                <button className='bg-red-500 py-2 px-2 rounded text-sm cursor-pointer'>Mark as Failed</button>
              </div>
        </div>
  )
}

export default AcceptTask