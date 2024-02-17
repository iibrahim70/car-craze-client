import useTitle from "../../hooks/useTitle";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import Button from "../../components/Button";
import useToast from "../../hooks/useToast";
import SocialLogin from "../../components/SocialLogin";
import loginAnimation from "../../assets/animation/login.json";

const Signin = () => {
  useTitle("Signin");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { signIn } = useContext(AuthContext);
  const { showToast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (user) => {
    const { email, password } = user;
    signIn(email, password)
      .then(() => {
        navigate(from, { replace: true });
        showToast("Welcome back to car craze!");
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
        <h2 className="text-center text-4xl font-bold mb-10">Login</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
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

          <Button colors="secondary" size="full">
            Signin
          </Button>
        </form>

        {/* social login */}
        <SocialLogin />

        <p className="w-full">
          Don't have an account yet?{" "}
          <Link className="text-red" to="/signup">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
