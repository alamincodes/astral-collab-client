import React from "react";
import Logo from "../../../assets/Logo.png";
import { HiOutlineSupport } from "react-icons/hi";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <header className="py-6 bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="myContainer flex justify-between">
        {/* logo */}
        <div className="flex items-center">
          <img src={Logo} className="h-10" alt="" />
          <div>
            <h4 className="text-xl font-bold">Astral Collab</h4>
            <h6 className="font-bold text-xs text-transparent bg-clip-text bg-gradient-to-r from-[#e66cfb] to-[#5268f2]">
              bridging minds, igniting Discoverice
            </h6>
          </div>
        </div>
        {/* nav items */}
        <ul className="flex items-center space-x-9 font-semibold">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-primary font-semibold" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tools/coronal-mass-analyzer"
              className={({ isActive }) =>
                isActive ? "text-primary font-semibold" : ""
              }
            >
              Nasa Data Hub
            </NavLink>
          </li>
          <li>Research Space</li>
          <li>Code space</li>
          <li>Mentor Hub</li>
          <li>Virtual Lab</li>
        </ul>
        {/* profile info */}
        <button className="flex items-center font-bold bg-secondary border-2 border-primary rounded-full px-6 py-2 text-primary">
          <span>
            <HiOutlineSupport size={20} className="text-primary mr-1" />
          </span>
          Support
        </button>
        {/* <div className="flex items-center space-x-12 cursor-pointer rounded-full bg-secondary border-2 border-primary p-1">
          <div className="flex items-center space-x-2">
            <img
              src="https://via.placeholder.com/100x100.png?text"
              className="w-8 h-8 object-cover rounded-full"
              alt=""
            />
            <div className="text-xs">
              <h4 className="font-semibold">Shawon Khan</h4>
              <h5 className="text-gray-700 font-medium text-[10px]">
                Graphics Designer
              </h5>
            </div>
          </div>
          <div>
            <FiSettings size={20} className="text-primary" />
          </div>
        </div> */}
      </div>
    </header>
  );
};

export default Nav;
