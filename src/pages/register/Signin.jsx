import React, { useContext } from 'react';
import loginAnimation from '../../assets/animation/login.json'
import Lottie from 'lottie-react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Signin = () => {

  const {signIn, googleSignIn, setUser} = useContext(AuthContext); 

  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = user => {
    const {email, password} = user;
    signIn(email, password)
      .then(res => {
        const user = res.user;
        console.log(user);
        setUser(user);
        reset();
      })
      .catch(err => console.log(err));
  }

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(res => {
        const loggedUser = res.user;
        console.log(loggedUser);
      })
      .catch(err => {
        console.log(err);
      })
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
        <form onSubmit={handleSubmit(onSubmit)} className='w-[70%] mx-auto'>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]"{...register('email', { required: true })} />
            {errors.email && (
              <span className="text-red-500 text-sm">This field is required</span>
            )}
          </div>
          
          <div className="mb-4">
            <label className="block mb-1 font-medium">Password</label>
            <input className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]" type='password'{...register('password', { required: true })} />
            {errors.password && (
              <span className="text-red-500 text-sm">This field is required</span>
            )}
          </div>

          <input className="btn w-full rounded-sm bg-[#2ECC71] text-[#F2F6FC] hover:bg-black capitalize text-base" type="submit" value="Login" />
        </form>
        <div className="flex items-center mt-5">
          <p className="mr-2">Signin with</p>
          <button onClick={handleGoogleSignIn} className='btn bg-[#2ECC71] text-[#F2F6FC] hover:bg-black rounded-sm'>Google</button>
        </div>

        <p className='mt-5'>Don't have an account yet? <Link className='text-[#FF4136]' to='/signup'>Signup</Link></p>
      </div>
    </div>
  );
};

export default Signin;



