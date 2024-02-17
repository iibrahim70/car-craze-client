import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import Button from "../../components/Button";
import useToast from "../../hooks/useToast";
import SocialLogin from "../../components/SocialLogin";
import loginAnimation from "../../assets/animation/login.json";

const Signup = () => {
  useTitle("Signup");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { showToast } = useToast();
  const { createUser, updateUserProfile } = useContext(AuthContext);
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
        showToast("Signup successful!");
        reset();
      })
      .catch((err) => {
        showToast(err.message);
        console.error(err);
      });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-[90%] md:w-[50%] lg:w-[90%] mx-auto min-h-screen">
      {/* left side animation */}
      <div className="hidden lg:flex flex-col justify-center items-center">
        <div className="w-[80%]">
          <Lottie animationData={loginAnimation} loop={true} />
        </div>
      </div>

      {/* right side login form */}
      <div className="shadow-xl p-10 flex items-center justify-center flex-col w-full">
        <h2 className="text-center text-4xl font-bold mb-10">Signup</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="mb-4">
            <label className="block mb-1 font-medium">Name</label>
            <input
              className="w-full border-b border-black py-2 px-3 focus:outline-none focus:border-b"
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
              className="w-full border-b border-black py-2 px-3 focus:outline-none focus:border-b"
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
              className="w-full border-b border-black py-2 px-3 focus:outline-none focus:border-b"
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
              className="w-full border-b border-black py-2 px-3 focus:outline-none focus:border-b"
              {...register("photoUrl", { required: true })}
            />
            {errors.photoUrl && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          <Button children="Signup" colors="secondary" size="full" />
        </form>

        {/* social login */}
        <SocialLogin />

        <p className="w-full">
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
