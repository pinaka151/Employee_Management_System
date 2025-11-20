import "./App.css";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/DashBoard/EmployeeDashboard";
import AdminDashboard from "./components/DashBoard/AdminDashboard";
import { useContext, useEffect, useState } from "react";
import { Authcontext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const AuthData = useContext(Authcontext);

  useEffect(() => {
      const loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser) {
        const userData = JSON.parse(loggedInUser)
        // console.log(userData)
       setUser(userData.role)
        setLoggedInUserData(userData.data)
      }
  }, []);



  

  const handlelogin = (email, password) => {

    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    }

     else if (AuthData) {
        const employee =  AuthData.find((e) => email == e.email && e.password == password)
        if(employee){
      setUser("employee");
      setLoggedInUserData(employee)
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data:employee }));
      }
      else {
      alert("Invalid Credentials");
    }
    }
    
     
  };

  return (
    <>
      {!user ? <Login handlelogin={handlelogin}  /> : ""}
      {user === "admin" && <AdminDashboard changeUser = {setUser} />}
      {user === "employee" && <EmployeeDashboard changeUser = {setUser} data = {loggedInUserData} />}
    </>
  );
};

export default App;
