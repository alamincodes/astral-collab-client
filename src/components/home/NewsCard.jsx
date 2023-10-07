import React, { useEffect, useState } from 'react';
import { BiUpvote , BiSolidUpvote} from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";
import { HiOutlineBell } from "react-icons/hi2";
const NewsCard = ({news}) => {
  const { projectTitle, authorName, authorImage, authorDesignation, projectDescription, images, contributors, tags} = news;
    const [activeVote, setActiveVote] = useState('inactive');
    const [voteCount, setVoteCount] =  useState(Math.floor(Math.random() * 900) + 100)
    const [showFullDescription, setShowFullDescription] = useState(false)
    // Generate a random number between 100 and 999 (3 digits)
  
  // Convert the number to a string if needed
  
  const handleVote = () => {
    localStorage.setItem('isActive', 'active');
    setActiveVote('active');
     setVoteCount(voteCount + 1);
    
  }
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  
  useEffect(() => {
    localStorage.setItem('isActive', activeVote);
  }, [activeVote]); 
    return (
        <div className="bg-white shadow-md py-4 px-8 rounded-lg my-5">
        {/* news name and dare */}
        <div className="flex justify-between items-center border-b-2 border-gray-100 pb-2">
          <h5 className="text-2xl font-bold capitalize">{projectTitle}</h5>
          <h6 className="font-medium text-neutral-500">
            08.15 PM 3rd Sept, 2023
          </h6>
        </div>
        {/* user info and contributes */}
        <div className="py-2 border-b-2 border-gray-100">
          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <img
                src={authorImage}
                className="w-10 h-10 object-cover rounded-full"
                alt=""
              />
              <div className="text-md">
                <h4 className="font-semibold">{authorName}</h4>
                <h5 className="text-gray-700 font-medium text-xs">
                 {authorDesignation}
                </h5>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-4">
         
               

              {  images.length > 3 ? images.slice(0, 3).map(image => <div  key={image}><img  src={image} className="h-8 w-8 rounded-full border-2 border-primary object-cover" alt="" /></div> ) :  images.map(image => <img key={image} src={image} className="h-8 w-8 rounded-full border-2 border-primary object-cover" alt="" />)}
                
              
              </div>
              <h5 className="font-bold text-xs"> +{contributors} contributors</h5>

              {
                tags.map(tag =><h5 className=" text-primary bg-secondary font-medium px-4 py-1 rounded-full text-sm">
                {" "}
                {tag}
              </h5> )
              }
              
            </div>
          </div>
        </div>
        {/* news data*/}
        <div className="py-3 border-b-2 border-gray-100">
          <p  onClick={toggleDescription}>
           
          {showFullDescription ? (
        projectDescription
      ) : (
        <>
          {projectDescription.length > 300 ? (
            <>
              {projectDescription.slice(0, 300)}...
              <button
                className='font-semibold italic text-primary ml-2'
               
              >
                See more
              </button>
            </>
          ) : (
            projectDescription
          )}
        </>
      )}

            {/* <b className="italic">See More</b> */}
          </p>
        </div>
        {/* buttons */}
        <div className="pt-3 flex justify-around">
          <button onClick={handleVote} className={`border-2 bg-neutral-200 hover:scale-110 duration-300 transition-all hover:border-primary ${activeVote ==="active" && 'bg-primary text-white border-primary '} hover:bg-secondary hover:text-primary flex items-center space-x-2  font-semibold px-14 py-2 rounded-full`}>
            <span >
            {activeVote === 'active' ? <BiSolidUpvote size={20} className="mr-2"/> :  <BiUpvote size={20} className="mr-2"  />}
             
            </span>
            Up Vote  <span className="">{voteCount}</span>
          </button>
          <button className="bg-neutral-200 flex items-center font-semibold px-14 py-2 rounded-full hover:bg-secondary border-2 hover:border-primary transition-all hover:scale-110 hover:text-primary ">
            <span>
              <FaRegStar size={20} className="mr-1" />
            </span>
            interested
          </button>
          <button className="bg-neutral-200 flex items-center group font-semibold px-14 py-2 rounded-full hover:bg-secondary border-2 hover:border-primary transition-all hover:scale-110 hover:text-primary ">
            <span>
              <HiOutlineBell size={20} className="mr-1 group-hover:-rotate-12 transition-all" />
            </span>
            Stay Engaged
          </button>
        </div>
      </div>
    );
};

export default NewsCard;