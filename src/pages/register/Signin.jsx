import React, { useContext } from 'react';
import loginAnimation from '../../assets/animation/login.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';

const Signin = () => {

  const {signIn} = useContext(AuthContext); 

  const handleSignin = e => {
    e.preventDefault();
    const form = e.target; 
    const email = form.email.value; 
    const password = form.password.value;

    signIn(email, password)
      .then(res => {
        const user = res.user; 
        console.log(user);
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="grid grid-cols-2 min-h-screen mt-[144px] mb-20">

      {/* left side animation */}
      <div className="flex flex-col justify-center items-center">
        <div className='w-[70%]'>
          <Lottie animationData={loginAnimation} loop={true} />
        </div>
      </div>

      {/* right side login form */}
      <div className="shadow-xl flex flex-col justify-center items-center py-10">
        <h2 className='text-center text-4xl font-bold mb-10'>Login</h2>
        <form onSubmit={handleSignin} className='w-[60%] mx-auto'>
          <div className="form-control">
            <label className="label">
              <span>Email</span>
            </label>
            <input type="text" name='email' placeholder="Email ID" className="input input-bordered shadow-2xl" />
          </div>
          <div className="form-control">
            <label className="label">
              <span>Password</span>
            </label>
            <input type="password" name='password' placeholder="Password" className="input input-bordered shadow-2xl" />
            <label className="label">
              <a href="#" className="text-blue-600 link">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <input type="submit" value="Login" className='btn bg-[#2ECC71] text-white hover:bg-black' />
          </div>
        </form>
        <div className="flex items-center mt-5">
          <p className="mr-2">Signin with</p>
          <FaGoogle className="" />
        </div>
        <p className='mt-5'>Don't have an account yet? <Link className='text-[#FF4136]' to='/signup'>Signup</Link></p>
      </div>
    </div>
  );
};

export default Signin;