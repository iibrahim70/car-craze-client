import useTitle from "../hooks/useTitle";
import { Link, useRouteError } from "react-router-dom";
import { buttonVariants } from "../components/Button";
import Lottie from "lottie-react";
import errorAnimation from "../assets/animation/error.json";

const ErrorPage = () => {
  useTitle("ErrorPage");
  const { error } = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-lg text-center space-y-5">
        <Lottie animationData={errorAnimation} loop={true} />
        <p className="text-xl font-medium md:text-2xl text-[#212121]">
          Opps!! {error?.message}
        </p>
        <Link to="/" className={buttonVariants({ colors: "secondary" })}>
          Back to homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
