import React from "react";
import HEADER from "../other/Header";

import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-10">
      <HEADER />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
