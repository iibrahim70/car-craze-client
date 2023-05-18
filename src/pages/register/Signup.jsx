import React, { useContext } from 'react';
import loadAnimation from '../../assets/login.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';

const Signup = () => {

  const { createUser } = useContext(AuthContext); 

  const handleSignup = e => {
    e.preventDefault();
    const form = e.target; 
    const name = form.name.value; 
    const email = form.email.value; 
    const password = form.password.value; 
    const photoUrl = form.photoUrl.value;

    createUser(email, password)
      .then(res => {
        const user = res.user;
        console.log(user);
      })
      .catch(err => console.log(err)); 
  }

  return (
    <div className="grid grid-cols-2 min-h-screen mt-40 mb-20">

      {/* left side animation */}
      <div className="flex flex-col justify-center items-center">
        <div className='w-[70%]'>
          <Lottie animationData={loadAnimation} loop={true} />
        </div>
      </div>

      {/* right side login form */}
      <div className="shadow-xl flex flex-col justify-center items-center py-10">
        <h2 className='text-center text-4xl font-bold mb-10'>Signup</h2>
        <form onSubmit={handleSignup} className='w-[60%] mx-auto'>
          <div className="form-control">
            <label className="label">
              <span>Name</span>
            </label>
            <input type="text" name='name' placeholder="Name" className="input input-bordered shadow-2xl" />
          </div>
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
          </div>
          <div className="form-control">
            <label className="label">
              <span>Photo URL</span>
            </label>
            <input type="text" name='photoUrl' placeholder="Photo URL" className="input input-bordered shadow-2xl" />
          </div>
          <div className="form-control mt-6">
            <input type="submit" value="signup" className='btn bg-[#2ECC71] text-white hover:bg-black' />
          </div>
        </form>
        <div className="flex items-center mt-5">
          <p className="mr-2">Signin with</p>
          <FaGoogle className="" />
        </div>
        <p className='mt-5'>Already have an account? <Link className='text-[#FF4136]' to='/signin'>Signin</Link></p>
      </div>
    </div>
  );
};

export default Signup;

