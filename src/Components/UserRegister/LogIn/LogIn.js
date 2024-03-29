import React, { useRef } from "react";
import CommonSignIn from "../CommonSignIn/CommonSignIn";
import logo from "../../../images/logo.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SpinnerLoading from "../../Spinner/SpinnerLoading";

const LogIn = () => {
  // getting values of inputs
  const emailRef = useRef("");
  const passRef = useRef("");

  // redirection
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // firebase hooks for sign in and reset email..
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, Perror] = useSendPasswordResetEmail(auth);

  const handleSignInUserForm = (event) => {
    event.preventDefault();
    // getting values of inputs
    const email = emailRef.current.value;
    const password = passRef.current.value;

    // condition
    if (!email || !password) {
      toast.error("Please Fill Up The Form", {
        position: "top-center",
        autoClose: 2500,
      });
    } else {
      signInWithEmailAndPassword(email, password);
    }
  };

  // reset passwords function
  const sendPassResetEmail = async () => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    toast("Check Your Email to Reset Password", {
      position: "top-center",
      autoClose: 2000,
    });
  };

  if (loading) {
    return <SpinnerLoading></SpinnerLoading>;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div className="sm:w-[34rem] mx-auto sm:mt-32 mt-40">
      {/* brand logo */}
      <div>
        <img className="mx-auto" src={logo} alt="" />
      </div>
      <div className="mt-10 mx-8">
        <form onSubmit={handleSignInUserForm}>
          <input
            ref={emailRef}
            className="w-full bg-[#F4FCFA] mb-3 py-4 px-3 mx-auto focus:outline outline-[#26ABA3]"
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
          />
          <input
            ref={passRef}
            className="w-full bg-[#F4FCFA] mb-3 py-4 px-3 mx-auto focus:outline outline-[#26ABA3]"
            type="password"
            name="password"
            id="password"
            placeholder="Your Password"
          />

          {/* showed error here */}
          {error ? <p className="text-center text-red-500">{error?.message}</p> : ""}

          <input
            id="login"
            className="w-full py-3 my-2 bg-[#26ABA3] text-lg font-semibold text-[aliceblue] cursor-pointer"
            type="submit"
            value="LogIn"
          />

          <p className="text-center py-2 text-gray-500">
            New In Talking Minds?{" "}
            <Link id="register" className="hover:underline underline-offset-1 hover:text-[#26ABA3]" to="/signup">
              Register For Free
            </Link>
          </p>

          <p className="text-center  mb-2 text-gray-500">
            <button onClick={sendPassResetEmail} className="hover:underline underline-offset-1 hover:text-[#26ABA3]">
              Forgot Your Password?
            </button>
          </p>
        </form>
      </div>
      {/* common sign in methods here */}
      <CommonSignIn></CommonSignIn>
      <ToastContainer theme="dark"></ToastContainer>
    </div>
  );
};

export default LogIn;
