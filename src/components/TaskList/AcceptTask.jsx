import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className="flex-shrink-0 h-full p-5 w-[300px]  bg-blue-400 rounded-xl ">
    <div className='flex justify-between items-center'>
      <h3 className="bg-blue-600 text-sm px-3 py-1 rounded-lg">{data.category}</h3>
      <h2 className='text-sm'>{data.date}</h2>
    </div>
    <h2 className='mt-5 text-2xl text-blue-900 font-semibold'>{data.title}</h2>
    <p className='text-sm mt-2 text-blue-900 '>{data.description}</p>
    <div className='flex justify-between mt-4'>
      <button className='bg-green-500 text-green-900 py-1 px-2 text-sm rounded-lg'>mark as completed</button>
      <button className='bg-red-500 text-red-900 rounded-lg py-1 px-2 text-sm'>mark as failed</button>
    </div>
  </div>
  )
}

export default AcceptTask
