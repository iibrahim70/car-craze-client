import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import ActiveLink from "../components/ActiveLink";
import Button, { buttonVariants } from "../components/Button";
import useToast from "../hooks/useToast";
import logo from "../assets/logo/black-logo.ico";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { showToast } = useToast();

  const navItems = (
    <div className="space-x-5 navItem">
      <ActiveLink to="/">Home</ActiveLink>
      <ActiveLink to="allcars">All Cars</ActiveLink>
      <ActiveLink to="mycars">My Cars</ActiveLink>
      <ActiveLink to="addcars">Add Cars</ActiveLink>
      <ActiveLink to="qna">Qna</ActiveLink>
    </div>
  );

  const handleLogout = () => {
    logOut()
      .then(() => {
        showToast("Logout Successful!");
      })
      .catch((err) => {
        showToast(err.message);
      });
  };

  return (
    <div className="fixed top-0 w-[100%] shadow-lg bg-white z-10">
      <div className="navbar section-wrapper">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content p-5 shadow bg-base-100 w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/">
            <img className="h-8" src={logo} alt="" />
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">{navItems}</div>

        <div className="navbar-end md:gap-10">
          {user && (
            <div
              className="hidden md:flex tooltip tooltip-left"
              data-tip={user?.displayName}
            >
              <div className="avatar">
                <div className="w-8 md:w-12 mr-2 md:mr-0 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </div>
            </div>
          )}

          {user ? (
            <Button onClick={handleLogout} colors="secondary" size="small">
              Logout
            </Button>
          ) : (
            <Link
              to="/signin"
              className={buttonVariants({ colors: "secondary", size: "small" })}
            >
              Signin
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
