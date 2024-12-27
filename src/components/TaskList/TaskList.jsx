import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'
import CompleteTask from './CompleteTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='flex items-center overflow-x-auto justify-start gap-5 flex-nowrap h-[55%] w-full py-5 mt-10 rounded-xl'>
      {
        data.tasks.map((task ,id) => {
          if(task.active){
            return <AcceptTask key={id} data={task}/>
          }else if(task.completed){
            return <CompleteTask key={id} data={task}/>
          }else if(task.failed){
            return <FailedTask key={id} data={task}/>
          }else if(task.newTask){
            return <NewTask key={id} data={task}/>
          }
        })
      }
    </div>
  )
}

export default TaskList
