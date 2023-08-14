import React, { useContext } from "react";
import loginAnimation from "../../assets/animation/login.json";
import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import "toastify-js/src/toastify.css";
import useTitle from "../../components/hooks/useTitle";
import { FcGoogle } from "react-icons/fc";
import Button from "../../components/button/Button";
import useToast from "../../hooks/useToast";

const Signup = () => {
  useTitle("Signup");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { showToast } = useToast();
  const { createUser, googleSignIn, updateUserProfile } =
    useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (user) => {
    const { name, email, password, photoUrl } = user;

    createUser(email, password)
      .then(() => {
        navigate(from, { replace: true });
        updateUserProfile(name, photoUrl);
        showToast("Signup successful! Welcome to our website.");
        reset();
      })
      .catch((err) => {
        showToast(err.message);
        console.error(err);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        showToast("Welcome Back To Car Craze!");
        navigate(from);
      })
      .catch((err) => {
        showToast(err.message);
        console.err(err);
      });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen w-[90%] mx-auto">
      {/* left side animation */}
      <div className="hidden lg:flex flex-col justify-center items-center">
        <div className="w-[80%]">
          <Lottie animationData={loginAnimation} loop={true} />
        </div>
      </div>

      {/* right side login form */}
      <div className="shadow-xl flex flex-col justify-center items-center py-10">
        <h2 className="text-center text-4xl font-bold mb-10">Signup</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="w-[80%] mx-auto">
          <div className="mb-4">
            <label className="block mb-1 font-medium">Name</label>
            <input
              className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input
              className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Password</label>
            <input
              className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]"
              type="password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Photo URL</label>
            <input
              className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]"
              {...register("photoUrl", { required: true })}
            />
            {errors.photoUrl && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          <Button placehoder="Signup" colors="secondary" size="large" />
        </form>

        <div className="flex items-center mt-4">
          <p className="mr-2">Signin with</p>
          <FcGoogle
            onClick={handleGoogleSignIn}
            className="w-8 h-8 cursor-pointer"
          />
        </div>

        <p className="mt-4">
          Already have an account?{" "}
          <Link className="text-[#FF4136]" to="/signin">
            Signin
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
