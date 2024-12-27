import { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import { AuthContext } from './context/AuthProvider'

function App() {

  const[user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, setUserData]= useContext(AuthContext)
  

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  },[])

  const handleLogin = (email, password) => {
    if(email == 'admin@example.com' && password == 123){
      setUser('admin')
      setLoggedInUserData('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))

    }else if(userData){
      const employ = userData.find((e)=> email === e.email && e.password == password)
      if(employ){
        setUser('employee')
        setLoggedInUserData(employ)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee', data:employ}))
      }

    }

  
  }

  return (
    <div>
      {!user ? <Login handleLogin={handleLogin}/> : user == 'admin' ? <AdminDashboard changeUser={setUser} data={loggedInUserData} /> : <EmployeeDashboard changeUser={setUser} data={loggedInUserData}/>}
    </div>
  )
}

export default App