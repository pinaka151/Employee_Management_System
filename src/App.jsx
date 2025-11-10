import React, { useEffect } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/DashBoard/EmployeeDashboard'
import AdminDashboard from './components/DashBoard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'

const App = () => {
useEffect(() => {
  // setLocalStorage()
     getLocalStorage()
},)


  return (
    <>
     <Login/>
    {/* <EmployeeDashboard/> */}
    {/* <AdminDashboard/> */}
    </>
  )
}

export default App
