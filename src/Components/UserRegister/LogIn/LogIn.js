import React, { useRef } from "react";
import CommonSignIn from "../CommonSignIn/CommonSignIn";
import logo from "../../../images/logo.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SpinnerLoading from "../../Spinner/SpinnerLoading";

const LogIn = () => {
  const emailRef = useRef("");
  const passRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  const handleSignInUserForm = (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passRef.current.value;

    if (!email || !password) {
      toast.error("Please Fill Up The Form", {
        position: "top-center",
        autoClose: 2500,
      });
    } else {
      signInWithEmailAndPassword(email, password);
    }
  };

  if (user) {
    navigate(from, { replace: true });
  }

  if (loading) {
    return <SpinnerLoading></SpinnerLoading>;
  }

  return (
    <div className="w-[34rem] mx-auto mt-28">
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

          {error ? <p className="text-center text-red-500">{error?.message}</p> : ""}

          <input
            className="w-full py-3 my-2 bg-[#26ABA3] text-lg font-semibold text-[aliceblue]"
            type="submit"
            value="LogIn"
          />

          <p className="text-center py-2 text-gray-500">
            New In Talking Minds?{" "}
            <Link className="hover:underline underline-offset-1 hover:text-[#26ABA3]" to="/signup">
              Sign Up For Free
            </Link>
          </p>

          <p className="text-center  mb-2 text-gray-500">
            <button className="hover:underline underline-offset-1 hover:text-[#26ABA3]">
              Forgot Your Password?
            </button>
          </p>
        </form>
      </div>
      <CommonSignIn></CommonSignIn>
      <ToastContainer theme="dark"></ToastContainer>
    </div>
  );
};

export default LogIn;
