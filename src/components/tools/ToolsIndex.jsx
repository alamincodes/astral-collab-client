import React from "react";
import ToolsLeftSidebar from "../tools/ToolsLeftSidebar";
import { Outlet } from "react-router-dom";
const ToolsIndex = () => {
  return (
    <section className="grid grid-cols-12">
      <aside className="col-span-2 w-full">
        <ToolsLeftSidebar />
      </aside>
      <div className="col-span-10">
        <Outlet />
      </div>
    </section>
  );
};

export default ToolsIndex;
