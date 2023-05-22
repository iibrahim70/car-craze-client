import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import logo from '../../assets/logo/black-logo.ico';
import ActiveLink from '../../routes/ActiveLink';

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext); 

  const navItems = <div className='space-x-5'>
    <ActiveLink to='/'>Home</ActiveLink>
    <ActiveLink to='alltoys'>All Toys</ActiveLink>
    {user &&<ActiveLink to='mytoys'>My Toys</ActiveLink>}
    {user &&<ActiveLink to='addtoys'>Add Toys</ActiveLink>}
    <ActiveLink to='blogs'>Blogs</ActiveLink>
  </div>

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch(err => console.log(err));
  }

  return (
    <div className='fixed top-0 pb-0 pt-0 w-full shadow-lg bg-white z-10'>
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
          <Link to='/'><img className='h-8' src={logo} alt="" /></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          {navItems}
        </div>
        <div className="navbar-end md:gap-10">
          
          {user && <div className="tooltip tooltip-left" data-tip={user?.displayName}>
            <div className="avatar">
              <div className="w-8 md:w-12 mr-2 md:mr-0 rounded-full" >
                <img src={user?.photoURL} />
              </div>
            </div>
          </div>}

          {user ? <button onClick={handleLogout} className="inline-flex items-center justify-center capitalize lg:text-base lg:px-6 md:px-4 px-3 lg:py-3 py-2 mb-3 font-bold text-black hover:font-medium transition hover:drop-shadow-2xl border-none hover:shadow-xl md:mb-0 hover:bg-[#2ECC71] duration-700">Logout</button> : <Link to='/signin' className="inline-flex items-center justify-center capitalize lg:text-base lg:px-6 md:px-4 px-3 lg:py-3 py-2 mb-3 font-bold text-black transition hover:drop-shadow-2xl hover:font-medium border-none hover:shadow-xl md:mb-0 hover:bg-[#2ECC71] duration-700">Signin</Link>}

        </div>
      </div>
    </div>
  );
};

export default Navbar;