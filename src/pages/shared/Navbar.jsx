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
    {<ActiveLink to='mytoys'>My Toys</ActiveLink>}
    {<ActiveLink to='addtoys'>Add Toys</ActiveLink>}
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
        <div className="navbar-end gap-10">
          
          {user && <div className="tooltip tooltip-left" data-tip={user?.displayName}>
            <label className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full" >
                <img src={user?.photoURL} />
              </div>
            </label>
          </div>}

          {user ? <button onClick={handleLogout} className="btn rounded-sm bg-[#2ECC71] text-[#F2F6FC] hover:bg-black capitalize text-base">Logout</button> : <Link to='/signin' className="btn rounded-sm bg-[#2ECC71] text-[#F2F6FC] hover:bg-black capitalize text-base">Signin</Link>}

        </div>
      </div>
    </div>
  );
};

export default Navbar;