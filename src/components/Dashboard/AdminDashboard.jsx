import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = ({
 data,
 changeUser
}) => {
  return (
    <div className='h-screen w-full p-7'>
      <Header changeUser={changeUser}  data={data}/>
      <CreateTask/>
      <AllTask/>
    </div>
  )
}

export default AdminDashboard
