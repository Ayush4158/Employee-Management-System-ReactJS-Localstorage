import React from 'react'

const NewTask = ({data}) => {
    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-yellow-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold text-yellow-900'>{data.title}</h2>
            <p className='text-sm mt-2 whitespace-nowrap overflow-hidden text-ellipsis text-yellow-900'>
                {data.description}
            </p>
            <div className='mt-6'>
                <button className='bg-green-500 text-green-900 rounded font-medium py-1 px-2 text-xs'>Accept Task</button>
            </div>
        </div>
    )
}

export default NewTask