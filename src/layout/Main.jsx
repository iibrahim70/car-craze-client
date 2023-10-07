import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

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
