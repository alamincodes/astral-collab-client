import React from 'react';
import HomeLeftSidebar from '../home/HomeLeftSidebar';
import HomeRightSidebar from '../home/HomeRightSidebar';
import { RiUserAddLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import Mentor from './Mentor';
const MentorHub = () => {

    const mentors = [
        {
            id:1,
            name: "David Henry",
            tags:[
                "Astronomy", " Astrology",  "Space", "Sql"
            ],
            designation:"astronomer",
            img:"https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            id:2,
            name: "John William",
            tags:[
                "Astronomy", " Astrology",  "Space", "Sql"
            ],
            designation:"astronomer",
            img:"https://randomuser.me/api/portraits/men/32.jpg",
        },
            {
            id:3,
            name: "william Lucas",
            tags:[
                "Astronomy", " Astrology",  "Space", "Sql"
            ],
            designation:"astronomer",
            img:"https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            id:4,
            name: "Json Roy",
            tags:[
                "Astronomy", " Astrology",  "Space", "Sql"
            ],
            designation:"astronomer",
            img:"https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            id:5,
            name: "Json Roy",
            tags:[
                "Astronomy", " Astrology",  "Space", "Sql"
            ],
            designation:"astronomer",
            img:"https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            id:6,
            name: "Json Roy",
            tags:[
                "Astronomy", " Astrology",  "Space", "Sql"
            ],
            designation:"astronomer",
            img:"https://randomuser.me/api/portraits/men/32.jpg",
        },
    ]
    console.log(mentors);
    return (
        <section className="grid grid-cols-12">
      <aside className="col-span-2">
        <HomeLeftSidebar />
      </aside>
      <div className="col-span-7">
      {/* header start */}
      <header className='mt-5 pr-4'>
        <div className="grid grid-cols-12 gap-5">
          {/* contributors btn */}
          <div className="col-span-4 w-full">
            <div className="flex items-center py-4 px-8 shadow bg-white border-2 border-primary rounded-lg">
              <h6>
                <RiUserAddLine size={20} className="mr-2 text-primary" />
              </h6>
              <h6 className="text-primary font-bold">Be a mentor</h6>
            </div>
          </div>
          {/* search btn */}
          <div className="col-span-7">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <h6>
                  <FiSearch size={20} className="mr-2 text-neutral-500" />
                </h6>
              </div>
              <input
                type="text"
                placeholder="Search Anything..."
                className="bg-white shadow rounded-lg placeholder-neutral-500 placeholder:text-xs placeholder:font-bold outline-none py-4 px-10 w-full"
              />
            </div>
          </div>
          {/* filter */}
          <div className="col-span-1">
            <div className="bg-white cursor-pointer shadow rounded-lg flex justify-center items-center py-4">
              <svg
                data-icon-name="filter-alt"
                data-style="line"
                icon_origin_id={20471}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                id="filter-alt"
                className="icon line w-6"
              >
                <path
                  style={{
                    stroke: "rgb(0, 0, 0)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 1,
                  }}
                  d="M5,3V17m0,0a2,2,0,1,0,2,2A2,2,0,0,0,5,17ZM12,7V21M12,3a2,2,0,1,0,2,2A2,2,0,0,0,12,3Zm7,11v7m0-11V3m0,7a2,2,0,1,0,2,2A2,2,0,0,0,19,10Z"
                  id="primary"
                />
              </svg>
            </div>
          </div>
        </div>
      </header>
      {/* header end */}


      {/* cards */}
      <div className='grid grid-cols-3 gap-5 pr-4 mt-5'>
      {
        mentors.map(mentor => <Mentor key={mentor.id} mentor={mentor}/> )
      }
        
      </div>
      </div>
      <aside className="col-span-3">
        <HomeRightSidebar />
      </aside>
    </section>
    );
};

export default MentorHub;