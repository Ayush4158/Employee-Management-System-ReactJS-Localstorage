import React from 'react'

const Header = ({data,changeUser}) => {
  // let username = ""
  // if(data.firstname){
  //   username = 'Ayush'
  // }else{
  //   username = data.firstname
  // }

  const logout = () => {
    localStorage.setItem('loggedInUser','')
    // window.location.reload()
    changeUser('')
  }
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello, <br/><span className='text-3xl font-semibold'>username</span></h1>
      <button 
      onClick={logout}
      className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-md'
      > Logout</button>
    </div>
  )
}

export default Header
