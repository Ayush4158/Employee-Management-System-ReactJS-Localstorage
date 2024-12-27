import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className="flex-shrink-0 h-full p-5 w-[300px] bg-green-400 rounded-xl ">
    <div className='flex justify-between items-center'>
      <h3 className="bg-green-600 text-sm px-3 py-1 rounded-lg">{data.category}</h3>
      <h2 className='text-sm'>{data.date}</h2>
    </div>
    <h2 className='mt-5 text-2xl font-semibold text-green-900'>{data.title}</h2>
    <p className='text-sm mt-2 text-green-900'>{data.description}</p>
    <div className="mt-4 flex justify-center">
      <button className='px-10 bg-green-500 text-green-900 rounded-lg'>Failed</button>
    </div>
  </div>
  )
}

export default CompleteTask
