import React, { useEffect, useState } from 'react';
import { BiUpvote } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";
import { HiOutlineBell } from "react-icons/hi2";
const NewsCard = () => {
    const [activeVote, setActiveVote] = useState(localStorage.getItem('isActive') || 'inactive');
    const [voteCount, setVoteCount] =  useState(Math.floor(Math.random() * 900) + 100)
    // Generate a random number between 100 and 999 (3 digits)
  
  // Convert the number to a string if needed
  
  const handleVote = () => {
    localStorage.setItem('isActive', 'active');
    setActiveVote('active');
     setVoteCount(voteCount + 1);
    
  }
  
  useEffect(() => {
    localStorage.setItem('isActive', activeVote);
  }, [activeVote]); 
    return (
        <div className="bg-white shadow py-4 px-8 rounded-lg my-5">
        {/* news name and dare */}
        <div className="flex justify-between items-center border-b-2 border-gray-100 pb-2">
          <h5 className="text-2xl font-bold capitalize">The artemis program</h5>
          <h6 className="font-medium text-neutral-500">
            08.15 PM 3rd Sept, 2023
          </h6>
        </div>
        {/* user info and contributes */}
        <div className="py-2 border-b-2 border-gray-100">
          <div className="flex justify-between">
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
            <div className="flex items-center space-x-3">
              <div className="flex -space-x-4">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" className="h-10 w-10 rounded-full border-2 border-primary object-cover" alt="" />
                <img src="https://randomuser.me/api/portraits/men/60.jpg" className="h-10 w-10 rounded-full border-2 border-primary object-cover"  alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThjs33T9bB5kKl3FzGVjYOHjy4e_ieWjS7DMVd5iF92nrkaiwSFktYUN1U-402K0t2sjk&usqp=CAU" className="h-10 w-10 rounded-full border-2 border-primary object-cover" alt="" />
              </div>
              <h5 className="font-bold"> 3 contributors</h5>
              <h5 className=" text-primary bg-secondary font-medium px-4 py-1 rounded-full text-sm">
                {" "}
                Astronomy{" "}
              </h5>
            </div>
          </div>
        </div>
        {/* news data*/}
        <div className="py-3 border-b-2 border-gray-100">
          <p>
            The Artemis Program, masterminded by NASA, stands as a testament to
            humanity's ceaseless pursuit of exploration and scientific progress.
            Unveiled in 2019, this audacious endeavor represents a multifaceted
            initiative, aimed at the triumphant return of astronauts to the
            lunar surface. It lays the foundation for a sustained lunar presence
            and charts a course towards future manned missions to destinations
            beyond, echoing the grandeur of discovery and exploration on an
            unprecedented scale. The program derives its name from the ancient
            Greek goddess of the Moon, Artemis.......{" "}
            <b className="italic">Sree More</b>
          </p>
        </div>
        {/* buttons */}
        <div className="pt-3 flex justify-around">
          <button onClick={handleVote} className={`border-2 border-primary ${activeVote ==="active" ? "bg-primary text-white": "bg-secondary text-primary"} text-primary flex items-center space-x-2  font-semibold px-14 py-2 rounded-full`}>
            <span >
              <BiUpvote size={20} className="mr-2"  />
            </span>
            Up Vote  <span className="">{voteCount}</span>
          </button>
          <button className="bg-secondary flex items-center border-2 border-primary text-primary font-semibold px-14 py-2 rounded-full">
            <span>
              <FaRegStar size={20} className="mr-1" />
            </span>
            interested
          </button>
          <button className="bg-neutral-200 flex items-center font-semibold px-14 py-2 rounded-full">
            <span>
              <HiOutlineBell size={20} className="mr-1" />
            </span>
            Stay Engaged
          </button>
        </div>
      </div>
    );
};

export default NewsCard;