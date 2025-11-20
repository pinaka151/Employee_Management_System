import React, { useContext, useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Authcontext } from "../../context/AuthProvider";

const CreateTask = () => {
const [UserData,setUserData] = useContext(Authcontext)

const [taskTitle, setTaskTitle] = useState("")
const [taskDescription, settaskDescription] = useState("")
const [taskDate, settaskDate] = useState("")
const [asignTo, setAsignTo] = useState("")
const [category, setCategory] = useState("")

const [NewTask, setNewTask] = useState({})

 const submitHandler = (e) => {
  e.preventDefault();

 
  const newTask = {
    taskTitle,            
    taskDescription,
    taskDate,
    category,
    active: false,
    newTask: true,
    failed: false,
    completed: false,
  };

 

  // create an updated employees array immutably
  const updatedEmployees = UserData.map(emp => {
    if (emp.firstName === asignTo) {
     
      const updatedTasks = Array.isArray(emp.tasks) ? [...emp.tasks, newTask] : [newTask];

      // safe increment (handles missing or non-numeric values)
      const updatedTaskCounts = {
        ...emp.taskCounts,
        NewTask: (Number(emp.taskCounts?.NewTask) || 0) + 1
      };

      return {
        ...emp,
        tasks: updatedTasks,
        taskCounts: updatedTaskCounts
      };
    }
    return emp;
  });

  // update context and localStorage
  setUserData(updatedEmployees);
  // if you have a helper to persist:
  if (typeof setLocalStorage === 'function') {
    setLocalStorage(updatedEmployees);
  } else {
    // fallback direct localStorage
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  }
 console.log(updatedEmployees)

  // reset form fields
  setTaskTitle('');
  settaskDescription('');
  settaskDate('');
  setCategory('');
  setAsignTo('');
}
  
  return (
    <div className="py-10 ">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="py-5 text-xl px-8 w-full h-130 border-[1px] border-transparent bg-[#1c1c1c] p-4 rounded-xl shadow-md cursor-pointertransition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:scale-[1.03]  hover:border-blue-400 hover:border-[1px]"
      >
        <div className="flex w-full overflow-hidden">
          <div className="w-1/2 pl-2.5">
            <div className="flex pb-7 pt-0 text-2xl items-center gap-2">
              <FaArrowCircleLeft className="cursor-pointer" />
              <h1> Create Task </h1>
            </div>

            <div>
              <h3>Task Title</h3>
              <input
              value={taskTitle}
              onChange={(e)=>{
                 setTaskTitle(e.target.value)
              }}
                className="w-[380px] mt-3 px-2 rounded-lg border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                type="text"
                placeholder="Make a UI design"
              />
            </div>

            <div className="mt-4">
              <h3>Date</h3>
              <input
              value={taskDate}
              onChange={(e)=>{
                 settaskDate(e.target.value)
              }}
                className="w-[380px] mt-3 px-2 rounded-lg border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                type="Date"
              />
            </div>

            <div className="mt-4">
              <h3>Asign to</h3>
              <input
              value={asignTo}
              onChange={(e)=>{
                 setAsignTo(e.target.value)
              }}
                className="w-[380px] mt-3 px-2 rounded-lg border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                type="text"
                placeholder="Employee Name"
              />
            </div>

            <div className="mt-4">
              <h3>Category</h3>
              <input
              value={category}
              onChange={(e)=>{
                 setCategory(e.target.value)
              }}
                className="w-[380px] mt-3 px-2 rounded-lg border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                type="text"
                placeholder="Design,Development,etc..."
              />
            </div>
          </div>

          <div className="w-1/2 flex flex-col flex-wrap overflow-hidden items-center py-8 ">
            <div className="mt-4">
              <h3>Description</h3>
              <textarea
              value={taskDescription}
              onChange={(e)=>{
                 settaskDescription(e.target.value)
              }}
                className="w-[34vw] h-[260px] mt-3 p-3 rounded-lg border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                name=""
                id=""
                placeholder="Describe the task Here..."
              ></textarea>
            </div>
            <button className="bottom-0 w-[34vw] hover bg-blue-400 border-none  my-10 cursor-pointer outline-none px-5 py-2 rounded-md">
              Create Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
