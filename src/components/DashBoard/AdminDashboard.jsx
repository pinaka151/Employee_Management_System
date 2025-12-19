import React, { useState } from "react";
import HEADER from "../other/Header";
import { FaArrowCircleLeft } from "react-icons/fa";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard = (props) => {
  const [showCreateTask, setShowCreateTask] = useState(true);
  return (
    <div className="h-screen w-full  img p-10">
      <HEADER changeUser = {props.changeUser} firstName = "vipin" />
      {!showCreateTask && (
        <div
          className="flex pb-3 pl-3 mt-6 pt-0 text-2xl items-center gap-2 cursor-pointer"
          
        >
          <FaArrowCircleLeft onClick={() => setShowCreateTask(true)} />
          <h1>Create Task</h1>
        </div>
      )}

      {/* CREATE TASK FORM */}
      {showCreateTask && (
        <CreateTask setShowCreateTask={setShowCreateTask} />
      )}
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
