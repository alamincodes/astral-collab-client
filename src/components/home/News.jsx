import React from "react";
import { RiUserAddLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { BiUpvote } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";
import { HiOutlineBell } from "react-icons/hi2";
const News = () => {
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
              <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
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
      {/* news card*/}
      <div className="bg-white shadow py-4 px-8 rounded-lg mt-5">
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
            <div className="flex items-center space-x-3">
              <div className="flex -space-x-4">
                <h4 className="h-10 w-10 bg-gray-200 border-2 border-white rounded-full"></h4>
                <h4 className="h-10 w-10 bg-gray-200 border-2 border-white rounded-full"></h4>
                <h4 className="h-10 w-10 bg-gray-200 border-2 border-white rounded-full"></h4>
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
          <button className="bg-primary flex items-center text-white font-semibold px-14 py-2 rounded-full">
            <span>
              <BiUpvote size={20} className="mr-1" />
            </span>
            Up Vote
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
      <div className="bg-white shadow py-4 px-8 rounded-lg mt-5">
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
            <div className="flex items-center space-x-3">
              <div className="flex -space-x-4">
                <h4 className="h-10 w-10 bg-gray-200 border-2 border-white rounded-full"></h4>
                <h4 className="h-10 w-10 bg-gray-200 border-2 border-white rounded-full"></h4>
                <h4 className="h-10 w-10 bg-gray-200 border-2 border-white rounded-full"></h4>
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
          <button className="bg-primary flex items-center text-white font-semibold px-14 py-2 rounded-full">
            <span>
              <BiUpvote size={20} className="mr-1" />
            </span>
            Up Vote
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
      <div className="bg-white shadow py-4 px-8 rounded-lg mt-5">
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
            <div className="flex items-center space-x-3">
              <div className="flex -space-x-4">
                <h4 className="h-10 w-10 bg-gray-200 border-2 border-white rounded-full"></h4>
                <h4 className="h-10 w-10 bg-gray-200 border-2 border-white rounded-full"></h4>
                <h4 className="h-10 w-10 bg-gray-200 border-2 border-white rounded-full"></h4>
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
          <button className="bg-primary flex items-center text-white font-semibold px-14 py-2 rounded-full">
            <span>
              <BiUpvote size={20} className="mr-1" />
            </span>
            Up Vote
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
      <div className="bg-white shadow py-4 px-8 rounded-lg mt-5">
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
            <div className="flex items-center space-x-3">
              <div className="flex -space-x-4">
                <h4 className="h-10 w-10 bg-gray-200 border-2 border-white rounded-full"></h4>
                <h4 className="h-10 w-10 bg-gray-200 border-2 border-white rounded-full"></h4>
                <h4 className="h-10 w-10 bg-gray-200 border-2 border-white rounded-full"></h4>
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
          <button className="bg-primary flex items-center text-white font-semibold px-14 py-2 rounded-full">
            <span>
              <BiUpvote size={20} className="mr-1" />
            </span>
            Up Vote
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
      <div className="bg-white shadow py-4 px-8 rounded-lg mt-5">
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
            <div className="flex items-center space-x-3">
              <div className="flex -space-x-4">
                <h4 className="h-10 w-10 bg-gray-200 border-2 border-white rounded-full"></h4>
                <h4 className="h-10 w-10 bg-gray-200 border-2 border-white rounded-full"></h4>
                <h4 className="h-10 w-10 bg-gray-200 border-2 border-white rounded-full"></h4>
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
          <button className="bg-primary flex items-center text-white font-semibold px-14 py-2 rounded-full">
            <span>
              <BiUpvote size={20} className="mr-1" />
            </span>
            Up Vote
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
      <div className="bg-white shadow py-4 px-8 rounded-lg mt-5">
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
            <div className="flex items-center space-x-3">
              <div className="flex -space-x-4">
                <h4 className="h-10 w-10 bg-gray-200 border-2 border-white rounded-full"></h4>
                <h4 className="h-10 w-10 bg-gray-200 border-2 border-white rounded-full"></h4>
                <h4 className="h-10 w-10 bg-gray-200 border-2 border-white rounded-full"></h4>
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
          <button className="bg-primary flex items-center text-white font-semibold px-14 py-2 rounded-full">
            <span>
              <BiUpvote size={20} className="mr-1" />
            </span>
            Up Vote
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
      <div className="bg-white shadow py-4 px-8 rounded-lg mt-5">
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
            <div className="flex items-center space-x-3">
              <div className="flex -space-x-4">
                <h4 className="h-10 w-10 bg-gray-200 border-2 border-white rounded-full"></h4>
                <h4 className="h-10 w-10 bg-gray-200 border-2 border-white rounded-full"></h4>
                <h4 className="h-10 w-10 bg-gray-200 border-2 border-white rounded-full"></h4>
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
          <button className="bg-primary flex items-center text-white font-semibold px-14 py-2 rounded-full">
            <span>
              <BiUpvote size={20} className="mr-1" />
            </span>
            Up Vote
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
    </section>
  );
};

export default News;
