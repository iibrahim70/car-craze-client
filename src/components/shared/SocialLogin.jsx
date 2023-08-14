import React, { useContext } from "react";
import useToast from "../../hooks/useToast";
import { AuthContext } from "../../providers/AuthProvider";
import Button from "../button/Button";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const { showToast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

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
    <div className="my-4 w-full">
      <Button colors="transparent" size="full" onClick={handleGoogleSignIn}>
        <div className="flex items-center justify-center gap-2">
          <p className="font-semibold">Signin with</p>
          <FcGoogle className="w-6 h-6" />
        </div>
      </Button>
    </div>
  );
};

export default SocialLogin;
