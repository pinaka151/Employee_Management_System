import React from "react";
import HEADER from "../other/Header";

import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard = (props) => {
  return (
    <div className="h-screen w-full p-10">
      <HEADER changeUser = {props.changeUser} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
