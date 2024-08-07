import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./firebase/firebaseConfig";
import { useState } from "react";
import EmailSignup from "./EmailSignup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [emailSignup, setemailSignup] = useState(false);
  const navigate = useNavigate();

  const signUpwithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      auth.currentUser && navigate("/");
      auth.currentUser && toast("Logged in successfully");
    } catch (err) {
      console.error(err);
      const error: any = err;
      toast.error(error);
    }
  };

  return (
    <div>
      <div className="bg-black h-screen flex items-center justify-center ">
        <div className="bg-white h-[550px] w-[500px] rounded-sm">
          <div className="flex flex-col items-center mt-5 ">
            <h1 className="text-3xl font-bold text-green-700 mt-5">
              AfriXpace
            </h1>
            <p className="mt-2">Unifications of Africa</p>
          </div>

          <div className="flex flex-col mt-10 px-20">
            <h1 className="text-xl font-bold">Sign Up</h1>
            <p className="text-sm text-zinc-500 mb-5">
              By continuing, you agree to our
              <span className="text-blue-400 hover:underline cursor-pointer">
                User Agreement
              </span>
              and acknowledge that you understand the
              <span className="text-blue-400 hover:underline cursor-pointer">
                Privacy Policy
              </span>
              .
            </p>
            <div>
              <div
                onClick={signUpwithGoogle}
                className="flex gap-4 border p-3 rounded-md mb-5 cursor-pointer"
              >
                <div>
                  <img
                    className="bg-white w-5 h-5"
                    src="assets/google icon.png"
                    alt="google icon"
                  />
                </div>
                <p>Continue with Google</p>
              </div>

              <div
                onClick={() => setemailSignup(true)}
                className="text-center mt-5 cursor-pointer bg-green-700 hover:bg-green-600 rounded-lg p-2 text-white"
              >
                Sign up with email
              </div>
            </div>
          </div>
        </div>
        {emailSignup ? <EmailSignup emailSignup={setemailSignup} /> : ""}
      </div>
    </div>
  );
};

export default Signup;
