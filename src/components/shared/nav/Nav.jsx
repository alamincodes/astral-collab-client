import React from "react";
import Logo from "../../../assets/Logo.png";
import { HiOutlineSupport } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <header className="py-6 bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="myContainer flex justify-between">
        {/* logo */}
       
         <Link to='/'>
          <div className="flex items-center relative">
          <h4 className="absolute right-5 -top-2 font-bold bg-yellow-400 px-2 py-1 rounded-full"> Beta</h4>
         <img src={Logo} className="h-10" alt="" />
         <div>
            <h4 className="text-xl font-bold">Astral Collab</h4>
            <h6 className="font-bold text-xs text-transparent bg-clip-text bg-gradient-to-r from-[#e66cfb] to-[#5268f2]">
              bridging minds, igniting Discoverice
            </h6>
          </div>
          </div>
         </Link>
          
        
        {/* nav items */}
        <ul className="flex items-center space-x-9 text-lg font-semibold">
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
              NASA Data Hub
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/researchSpace"
              className={({ isActive }) =>
                isActive ? "text-primary font-semibold" : ""
              }
            >
              Research Space
            </NavLink>

          </li>
          <li>

          <NavLink
              to="/codeSpace"
              className={({ isActive }) =>
                isActive ? "text-primary font-semibold" : ""
              }
            >
             Code space
            </NavLink>
          </li>
          <li> <NavLink
              to="/mentorHub"
              className={({ isActive }) =>
                isActive ? "text-primary font-semibold" : ""
              }
            >
             Mentor Hub
            </NavLink></li> 
          <li> <NavLink
              to="/virtualLab"
              className={({ isActive }) =>
                isActive ? "text-primary font-semibold" : ""
              }
            >
             Virtual Lab
            </NavLink></li>
          
        </ul>
        {/* profile info */}
        <button className="flex items-center font-bold bg-secondary border-2 border-primary rounded-full px-6 py-2 text-primary">
          <span>
            <HiOutlineSupport size={20} className="text-primary mr-1" />
          </span>
          Support
        </button>
        
      </div>
    </header>
  );
};

export default Nav;
