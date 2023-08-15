import React from "react";
import Lottie from "lottie-react";
import errorAnimation from "../../assets/animation/error.json";
import { useRouteError } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import Button from "../../components/button/Button";

const ErrorPage = () => {
  useTitle("ErrorPage");
  const { error } = useRouteError();
  return (
    <div className="container flex flex-col items-center justify-center">
      <div className="max-w-lg text-center">
        <Lottie animationData={errorAnimation} loop={true} />
        <p className="text-xl font-medium md:text-2xl text-[#212121] -mt-10 mb-10">
          Opps!! {error?.message}
        </p>
        <Button to="/" children="Back to homepage" colors="secondary" />
      </div>
    </div>
  );
};

export default ErrorPage;
