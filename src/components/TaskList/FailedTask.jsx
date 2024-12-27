import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className="flex-shrink-0 h-full p-5 w-[300px] bg-red-400 rounded-xl ">
    <div className='flex justify-between items-center'>
      <h3 className="bg-red-600 text-sm px-3 py-1 rounded-lg">{data.category}</h3>
      <h2 className='text-sm'>{data.date}</h2>
    </div>
    <h2 className='mt-5 text-2xl font-semibold text-red-900'>{data.title}</h2>
    <p className='text-sm mt-2 text-red-900'>{data.description}</p>
    <div className="mt-4 flex justify-center">
      <button className='px-10 bg-red-500 text-red-900 rounded-lg'>Failed</button>
    </div>
  </div>
  )
}

export default FailedTask
