import React from "react";

const HomeRightSidebar = () => {
  return (
    <aside className="bg-white shadow h-screen myContainer pt-10 fixed">
      {/* What's going on */}
      <div className="p-3 flex flex-col capitalize">
        <h4 className="font-semibold">What's going on</h4>
        <div className="flex flex-col space-y-1 ml-2 border-l-2 border-gray-300 pl-2">
          <h5 className="text-sm underline">
            Coronal mass emission just happened!
          </h5>
          <h5 className="text-sm underline">Asteroid near earth-orbit!</h5>
          <h5 className="text-sm underline">Space news roundup</h5>
        </div>
      </div>
      {/* Did you know? */}
      <div className="p-3 flex flex-col capitalize">
        <h4 className="font-semibold">Did you know?</h4>
        <div className="flex flex-col space-y-1 ml-2 border-l-2 border-gray-300 pl-2">
          <h5 className="text-sm underline">Exoplanet habitability</h5>
          <h5 className="text-sm underline">Dark matter and dark energy</h5>
          <h5 className="text-sm underline">Tidal Locking</h5>
        </div>
      </div>
      {/* Inside Nasa  */}
      <div className="p-3 flex flex-col capitalize">
        <h4 className="font-semibold">Inside Nasa</h4>
        <div className="flex flex-col space-y-1 ml-2 border-l-2 border-gray-300 pl-2">
          <h5 className="text-sm underline">Astronomy events calendar</h5>
          <h5 className="text-sm underline">Women in space </h5>
          <h5 className="text-sm underline">Nasa's future mission</h5>
        </div>
      </div>

      {/* astronomy pictures */}
      <div className="border-t-2 border-gray-100 py-2 mt-7">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="capitalize font-bold">astronomy pictures</h4>
            <h6 className="text-xs font-medium">Only the best till now.</h6>
          </div>
          <button className="bg-neutral-200 font-medium px-4 py-2 rounded-full text-xs">
            See All
          </button>
        </div>
      </div>

      <div>
        <img
          src="https://cdn.discordapp.com/attachments/1147637810308857969/1147855756331331646/shutterstock-1041249343.png"
          className="rounded-xl"
          alt=""
        />
      </div>
    </aside>
  );
};

export default HomeRightSidebar;
