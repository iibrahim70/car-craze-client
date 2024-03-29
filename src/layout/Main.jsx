import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Main = () => {
  return (
    <>
      <Navbar />
      <div className="overflow-x-hidden">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
