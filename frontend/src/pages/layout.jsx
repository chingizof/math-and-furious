import React from "react";
import {Outlet} from "react-router-dom";
import { Header } from "../components/header";
// import Navbar from "../Navbar";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;