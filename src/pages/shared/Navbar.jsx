import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const navItems = <div className='space-x-5'>
    <Link>Home</Link>
    <Link>All Toys</Link>
    <Link>My Toys</Link>
    <Link>Add Toy</Link>
    <Link>Blogs</Link>
  </div>
  
  return (
    <div className='bg-red-200'>
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
          <a className="btn btn-ghost normal-case text-xl">Car Craze</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          {navItems}
        </div>
        <div className="navbar-end">
          <Link to='/login' className="px-4 py-3 border border-[#ef233c] bg-red-600 text-white font-medium uppercase rounded-md">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;