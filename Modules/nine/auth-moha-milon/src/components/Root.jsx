import React from "react";
import { Outlet } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";

const Root = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
