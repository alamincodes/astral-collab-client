import React  from "react";
import { RiUserAddLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";

import NewsCard from "./NewsCard";
const News = () => {

  const researchData=[
    {
      id:1,
      projectTitle:"Space Exploration",
      authorName:"David Henry",
      authorImage:"https://randomuser.me/api/portraits/men/32.jpg",
      authorDesignation:"Space Expert",
      projectDescription:"Space Exploration is the adventurous pursuit of exploring and studying the cosmos beyond our planet, Earth. It encompasses a wide range of missions and activities, including sending spacecraft to other celestial bodies like the Moon, Mars, and distant planets, as well as conducting experiments and research in the unique environment of space.",
      images:[
        "https://randomuser.me/api/portraits/men/32.jpg",
        "https://randomuser.me/api/portraits/men/60.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThjs33T9bB5kKl3FzGVjYOHjy4e_ieWjS7DMVd5iF92nrkaiwSFktYUN1U-402K0t2sjk&usqp=CAU"
        
      ]
    },
    {
      id:2,
      projectTitle:"Climate Monitoring",
      authorName:"John William",
      authorImage:"https://randomuser.me/api/portraits/men/32.jpg",
      authorDesignation:"Climate monitoring Expert",
      projectDescription:"Climate monitoring serves a critical role in understanding and responding to climate change. By collecting and analyzing data from various sources, including weather stations, satellites, and ocean buoys, scientists can identify trends and patterns that reveal the impacts of global warming and other climate-related phenomena",
      images:[
        
        "https://randomuser.me/api/portraits/men/60.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThjs33T9bB5kKl3FzGVjYOHjy4e_ieWjS7DMVd5iF92nrkaiwSFktYUN1U-402K0t2sjk&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThjs33T9bB5kKl3FzGVjYOHjy4e_ieWjS7DMVd5iF92nrkaiwSFktYUN1U-402K0t2sjk&usqp=CAU"
      ]
    },
    {
      id:3,
      projectTitle:"Environmental Sustainability",
      authorName:"william Lucas",
      authorImage:"https://randomuser.me/api/portraits/men/32.jpg",
      authorDesignation:"Environmental Sustainability Expert",
      projectDescription:"Environmental Sustainability is a concept and approach that aims to ensure the responsible and harmonious interaction between human activities and the natural environment, with the goal of preserving Earth's ecosystems and resources for current and future generations. It involves the careful management of resources, reducing environmental impact, and maintaining ecological balance.",
      images:[
        "https://randomuser.me/api/portraits/men/32.jpg",
        "https://randomuser.me/api/portraits/men/60.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThjs33T9bB5kKl3FzGVjYOHjy4e_ieWjS7DMVd5iF92nrkaiwSFktYUN1U-402K0t2sjk&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThjs33T9bB5kKl3FzGVjYOHjy4e_ieWjS7DMVd5iF92nrkaiwSFktYUN1U-402K0t2sjk&usqp=CAU"
      ]
    },
    {
      id:4,
      projectTitle:"Space Policy and Ethics", 
      authorName:"Json Roy",
      authorImage:"https://randomuser.me/api/portraits/men/32.jpg",
      authorDesignation:"Space policy and Ethics Expert",
      projectDescription:"Space Policy and Ethics is a multidisciplinary field that addresses the development of guidelines, regulations, and principles governing human activities in outer space.t involves the formulation of policies and ethical frameworks to ensure responsible and sustainable space exploration and utilization while considering the interests of various stakeholders, including governments, private companies, scientists, and the global community.",
      images:[
        "https://randomuser.me/api/portraits/men/32.jpg",
        "https://randomuser.me/api/portraits/men/60.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThjs33T9bB5kKl3FzGVjYOHjy4e_ieWjS7DMVd5iF92nrkaiwSFktYUN1U-402K0t2sjk&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThjs33T9bB5kKl3FzGVjYOHjy4e_ieWjS7DMVd5iF92nrkaiwSFktYUN1U-402K0t2sjk&usqp=CAU"
      ]
    },
    {
      id:5,
      projectTitle:"Planetary Protection", 
      authorName:"Lucas",
      authorImage:"https://randomuser.me/api/portraits/men/32.jpg",
      authorDesignation:"Planetary Protection Expert",
      projectDescription:"Planetary Protection is a set of scientific, policy, and procedural measures designed to prevent the contamination of celestial bodies, such as planets and moons, with Earth's microorganisms, and to protect Earth from potential contamination by extraterrestrial materials. This field of study and practice is essential for maintaining the integrity of both scientific exploration and the search for extraterrestrial life.",
      images:[
        "https://randomuser.me/api/portraits/men/32.jpg",
        "https://randomuser.me/api/portraits/men/60.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThjs33T9bB5kKl3FzGVjYOHjy4e_ieWjS7DMVd5iF92nrkaiwSFktYUN1U-402K0t2sjk&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThjs33T9bB5kKl3FzGVjYOHjy4e_ieWjS7DMVd5iF92nrkaiwSFktYUN1U-402K0t2sjk&usqp=CAU"
      ]
    },
    {
      id:6,
      projectTitle:"Planetary Protection", 
      authorName:"Lucas",
      authorImage:"https://randomuser.me/api/portraits/men/32.jpg",
      authorDesignation:"Planetary Protection Expert",
      projectDescription:"Planetary Protection is a set of scientific, policy, and procedural measures designed to prevent the contamination of celestial bodies, such as planets and moons, with Earth's microorganisms, and to protect Earth from potential contamination by extraterrestrial materials. This field of study and practice is essential for maintaining the integrity of both scientific exploration and the search for extraterrestrial life.",
      images:[
        "https://randomuser.me/api/portraits/men/32.jpg",
        "https://randomuser.me/api/portraits/men/60.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThjs33T9bB5kKl3FzGVjYOHjy4e_ieWjS7DMVd5iF92nrkaiwSFktYUN1U-402K0t2sjk&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThjs33T9bB5kKl3FzGVjYOHjy4e_ieWjS7DMVd5iF92nrkaiwSFktYUN1U-402K0t2sjk&usqp=CAU"
      ]
    },

  ]
  return (
    <section className="px-10 py-5 h-screen overflow-y-scroll scrollbar">
      <header>
        <div className="grid grid-cols-12 gap-5">
          {/* contributors btn */}
          <div className="col-span-4 w-full">
            <div className="flex items-center py-4 px-8 shadow bg-white border-2 border-primary rounded-lg">
              <h6>
                <RiUserAddLine size={20} className="mr-2 text-primary" />
              </h6>
              <h6 className="text-primary font-bold">Look for contributors</h6>
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
      {/* cards */}
         
        { researchData.map(news => <NewsCard news={news} key={news.id} /> ) }    
      
    </section>
  );
};

export default News;
