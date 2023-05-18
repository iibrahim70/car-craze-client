import React from 'react';
import Navbar from '../pages/shared/Navbar';
import Footer from '../pages/shared/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <Navbar/>
      <div className='w-[90%] mx-auto'>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  );
};

export default Main;