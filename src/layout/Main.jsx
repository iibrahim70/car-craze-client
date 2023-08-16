import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="w-[90%] mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
