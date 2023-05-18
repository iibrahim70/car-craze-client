import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import logo from '../../assets/black-logo.ico';

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext); 

  const navItems = <div className='space-x-5'>
    <Link>Home</Link>
    <Link>All Toys</Link>
    <Link>My Toys</Link>
    <Link>Add Toy</Link>
    <Link>Blogs</Link>
  </div>

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch(err => console.log(err));
  }

  return (
    <div className='fixed top-0 w-full shadow-lg overflow-y-hidden bg-white z-10'>
      <div className="navbar w-[90%] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content p-5 shadow bg-base-100 w-52">
              {navItems}
            </ul>
          </div>
          <img className='h-8' src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          {navItems}
        </div>
        <div className="navbar-end">
          {user ? <button onClick={handleLogout} className="btn bg-[#2ECC71] text-white hover:bg-black">Logout</button> : <Link to='/signin' className="btn bg-[#2ECC71] text-white hover:bg-black">Signin</Link>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;