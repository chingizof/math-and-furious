import React from "react";
import {Outlet} from "react-router-dom";
import { Header } from "../components/header";
import { useState } from "react";
// import Navbar from "../Navbar";

const Layout = () => {
    // const [loggedIn, setLogin] = useState(false)
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;