import React from "react";
import HomeLeftSidebar from "./HomeLeftSidebar";
import HomeRightSidebar from "./HomeRightSidebar";
import News from "./News";

const HomeComponent = () => {
  return (
    <section className="grid grid-cols-12">
      <aside className="col-span-2">
        <HomeLeftSidebar />
      </aside>
      <div className="col-span-7">
        <News />
      </div>
      <aside className="col-span-3">
        <HomeRightSidebar />
      </aside>
    </section>
  );
};

export default HomeComponent;
