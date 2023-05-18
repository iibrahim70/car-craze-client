import React from 'react';
import loadAnimation from '../../assets/93385-login.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
  return (
    <div className="grid grid-cols-2 my-20 min-h-screen">

      {/* left side animation */}
      <div className="bg-gray-200 flex flex-col justify-center items-center">
        <div className='w-[70%]'>
          <Lottie animationData={loadAnimation} loop={true} />
        </div>
      </div>

      {/* right side login form */}
      <div className="bg-green-200 flex flex-col justify-center items-center">
        <form className='w-[60%] mx-auto'>
          <h2 className='text-center text-4xl font-bold'>Login</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="text" name='email' placeholder="Email ID" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name='password' placeholder="Password" className="input input-bordered" />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <input type="submit" value="Login" className='btn btn-primary' />
          </div>
        </form>
        <div className="flex items-center mt-5">
          <p className="mr-2">Login with</p>
          <FaGoogle className="" />
        </div>
        <p className='mt-5'>Don't have an account yet? <Link className='text-blue-500' to='/signup'>Signup</Link></p>
      </div>
    </div>
  );
};

export default Login;