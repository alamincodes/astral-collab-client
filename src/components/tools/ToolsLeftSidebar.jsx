import React from "react";
import { FiSettings } from "react-icons/fi";
import { NavLink } from "react-router-dom";
const ToolsLeftSidebar = () => {
  return (
    <aside className="bg-white shadow h-screen myContainer pt-5 fixed">
      {/* profile information */}
      <div className="flex items-center justify-between space-x-12 cursor-pointer rounded-full bg-secondary border-2 border-secondary p-1">
        <div className="flex items-center space-x-2">
          <img src="https://xsgames.co/randomusers/assets/avatars/male/74.jpg" className="w-8 h-8 object-cover rounded-full" alt="" />
          <div className="text-xs">
            <h4 className="font-semibold">Shawon Khan</h4>
            <h5 className="text-gray-700 font-medium text-[10px]">Graphics Designer</h5>
          </div>
        </div>
        <div>
          <FiSettings size={20} className="text-primary" />
        </div>
      </div>

      {/* Recent Activity*/}
      <div className="bg-gray-50 rounded-lg overflow-hidden border-2 border-gray-100 mt-7">
        <div className="bg-secondary">
          <h4 className="p-3 font-bold">Tools</h4>
        </div>
        <div className="p-3 flex flex-col">
          {/* category */}
          <h4 className="font-semibold">Space Weather Analyzer</h4>
          {/* subcategory */}
          <ul className="border-l-2 border-gray-300 pl-2 ml-2 space-y-2">
            <li className="text-xs cursor-pointer hover:underline font-medium">
              <NavLink
                to="/tools/coronal-mass-analyzer"
                className={({ isActive }) => (isActive ? "text-primary font-semibold" : "")}
              >
                Coronal Mass Ejection Analyzer
              </NavLink>
            </li>
            <li className="text-xs cursor-pointer hover:underline font-medium ">
              <NavLink
                to="/tools/interplanetary-shock-analyzer"
                className={({ isActive }) => (isActive ? "text-primary font-semibold" : "")}
              >
                Interplanetary Shock Analyzer
              </NavLink>
            </li>
            <li className="text-xs cursor-pointer hover:underline font-medium ">
              <NavLink
                to="/tools/geomagnetic-storm-analyzer"
                className={({ isActive }) => (isActive ? "text-primary font-semibold" : "")}
              >
                Geomagnetic Storm Analyzer
              </NavLink>
            </li>
            <li className="text-xs cursor-pointer hover:underline font-medium ">
              <NavLink to="/tools/geomagnetic-storm-analyzer">Solar Flare (FLR) Analyzer</NavLink>
            </li>
            <li className="text-xs cursor-pointer hover:underline font-medium ">
              <NavLink to="/tools/geomagnetic-storm-analyzer">Solar Energetic Particle (SEP) Analyzer</NavLink>
            </li>
            <li className="text-xs cursor-pointer hover:underline font-medium ">
              <NavLink to="/tools/geomagnetic-storm-analyzer">Magnetopause Crossing (MPC) Analyzer</NavLink>
            </li>
            <li className="text-xs cursor-pointer hover:underline font-medium ">
              <NavLink to="/tools/geomagnetic-storm-analyzer">Radiation Belt Enhancement (RBE) Analyzer</NavLink>
            </li>
            <li className="text-xs cursor-pointer hover:underline font-medium ">
              <NavLink to="/tools/geomagnetic-storm-analyzer">WSA+EnlilSimulation Analyzer</NavLink>
            </li>
          </ul>
          {/* category */}
          <h4 className="font-semibold mt-5">Near Earth Object Analyzer</h4>
          {/* category */}
          <h4 className="font-semibold mt-5">Earth Observer,</h4>
          {/* category */}
          <h4 className="font-semibold mt-5">Mars Weather Analyzer</h4>
          {/* category */}
          <h4 className="font-semibold mt-5">DSCOVR's EPIC Imagery</h4>
          {/* category */}
          <h4 className="font-semibold mt-5">Exoplanet Archive</h4>
          {/* category */}
          <h4 className="font-semibold mt-5">Mars Rover Photos</h4>
          {/* category */}
          <h4 className="font-semibold mt-5">NASA Image and Video Library</h4>
        </div>
      </div>
    </aside>
  );
};

export default ToolsLeftSidebar;
