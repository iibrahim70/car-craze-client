import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useToast from "../hooks/useToast";
import Button from "./Button";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const { showToast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        showToast(`Welcome Back ${res.user.displayName}!`);
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
