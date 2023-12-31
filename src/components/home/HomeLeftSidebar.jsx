import React, { useState } from 'react';
import { FiSettings } from "react-icons/fi";
import WorkingModal from '../shared/WorkingModal';

const HomeLeftSidebar = () => {
 const [isOpen, setIsOpen] = useState(false)
  return (
    <aside className="bg-white shadow h-screen myContainer pt-5 fixed ">

    {
      isOpen && <WorkingModal isOpen={isOpen} setIsOpen={setIsOpen}/>
    }
      {/* profile information */}
      <div className="flex items-center justify-between space-x-12 cursor-pointer rounded-full bg-secondary border-2 border-secondary p-1 ">
        <div className="flex items-center space-x-2">
          <img
            src="https://xsgames.co/randomusers/assets/avatars/male/74.jpg"
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
      </div>

      {/* Research Spotlight */}
      <div className="bg-gray-50 rounded-lg mt-5 overflow-hidden border-gray-100 border-2">
        <div className="bg-secondary ">
          <h4 className="p-3 font-bold">Research Spotlight</h4>
        </div>
        <div onClick={()=>setIsOpen(true)} className="p-3 flex flex-col space-y-3">
          <h5 className="underline text-sm">ShawonKhan/Space Telescopes</h5>
          <h5 className="underline text-sm">ShawonKhan/Planetary Defense</h5>
          <h5 className="underline text-sm">ShawonKhan/Mars Explorations</h5>
        </div>
      </div>
      {/* Recent Activity*/}
      <div className="bg-gray-50 rounded-lg overflow-hidden border-2 border-gray-100 mt-7">
        <div className="bg-secondary ">
          <h4 className="p-3 font-bold">Recent Activity</h4>
        </div>
       <div>
       <div onClick={()=>setIsOpen(true)} className="p-3 flex flex-col">
          <h4 className="font-semibold">Srejon Khan</h4>
          <div className="border-l-2 border-gray-300 pl-2 ml-2">
            <h5 className="text-sm">ShawonKhan/Space Telescopes</h5>
            <h5 className="text-sm">ShawonKhan/Planetary Defense</h5>
          </div>
        </div>
        <div className="p-3 flex flex-col">
          <h4 className="font-semibold">Rahman Rakib</h4>
          <div className="border-l-2 border-gray-300 pl-2 ml-2">
            <h5 className="text-sm">ShawonKhan/Space Telescopes</h5>
            <h5 className="text-sm">ShawonKhan/Planetary Defense</h5>
          </div>
        </div>
        <div className="p-3 flex flex-col">
          <h4 className="font-semibold">Md Alamin</h4>
          <div className="border-l-2 border-gray-300 pl-2 ml-2">
            <h5 className="text-sm">ShawonKhan/Space Telescopes</h5>
            <h5 className="text-sm">ShawonKhan/Planetary Defense</h5>
          </div>
        </div>
       </div>
      </div>
    </aside>
  );
};

export default HomeLeftSidebar;
