import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const Authcontext = createContext()

const AuthProvider = ({children}) => {
  // localStorage.clear()
    const [UserData, setUserData] = useState([])

    
   
useEffect(() => {
 if (!localStorage.getItem('employees') || !localStorage.getItem('Admin')) {
    setLocalStorage()
  }

   const {employees} = getLocalStorage()
    setUserData(employees)
    

},[])



  return (
    <div>
        <Authcontext.Provider value={[UserData,setUserData]}>
            {children}
        </Authcontext.Provider>
    </div>
  )
}

export default AuthProvider