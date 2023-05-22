import React from 'react';
import logo from '../../assets/logo/white-logo.ico';
import '../../../src/global.css';


const Footer = () => {
  return (
    <div className='bg-[#212121]'>
      <div className="footer w-[90%] mx-auto text-base-content py-10">
        <div>
          <img className='h-8 mb-5' src={logo} alt="" />
          <p className='text-[#F2F6FC]'>© 2023 Car Craze Ltd - All rights reserved.</p>
        </div>
        <div className='text-[#F2F6FC]'>
          <p className="font-bold mb-2 uppercase text-[#F2F6FC]">Services</p>
          <a className="link link-hover">Sports Car</a>
          <a className="link link-hover">Mini Fire Truck</a>
          <a className="link link-hover">Police Car</a>
        </div>
        <div className='text-[#F2F6FC]'>
          <p className="font-bold mb-2 uppercase text-[#F2F6FC]">Company</p>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Privacy Policy</a>
        </div>
        <div className='text-[#F2F6FC]'>
          <p className="font-bold mb-2 uppercase text-[#F2F6FC]">Social</p>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">Twitter</a>
          <a className="link link-hover">Linkedin</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;