import React from 'react'
import './App.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/DashBoard/EmployeeDashboard'
import AdminDashboard from './components/DashBoard/AdminDashboard'

const App = () => {
  return (
    <>
     {/* <Login/> */}
    {/* <EmployeeDashboard/> */}
    <AdminDashboard/>
    </>
  )
}

export default App
