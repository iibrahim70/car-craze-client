import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
