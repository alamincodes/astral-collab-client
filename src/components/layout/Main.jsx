import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../shared/nav/Nav";
import ScrollTop from "../shared/ScrollTop";
const Main = () => {
  return (
    <div>
      <ScrollTop />
      <Nav />
      <Outlet />
    </div>
  );
};

export default Main;
