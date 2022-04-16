import React, { useRef } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../../firebase.init";
import logo from "../../../images/logo.svg";
import CommonSignIn from "../CommonSignIn/CommonSignIn";

const SignUp = () => {
  const emailRef = useRef("");
  const nameRef = useRef("");
  const passRef = useRef("");
  const conPassRef = useRef("");

  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

  return (
    <div className="w-[34rem] mx-auto mt-24">
      <div>
        <img className="mx-auto" src={logo} alt="" />
      </div>
      <div className="mt-10 px-8">
        <form action="">
          <input
            ref={nameRef}
            className="w-full bg-[#F4FCFA] mb-3 py-4 px-3 mx-auto focus:outline outline-[#26ABA3]"
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
          />
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
          <input
            ref={conPassRef}
            className="w-full bg-[#F4FCFA] mb-3 py-4 px-3 mx-auto focus:outline outline-[#26ABA3]"
            type="password"
            name="conPassword"
            id="conPass"
            placeholder="Confirm Password"
          />

          <input
            className="w-full my-3 py-3 bg-[#26ABA3] text-lg font-semibold text-[aliceblue]"
            type="submit"
            value="SignUp"
          />

          <p className="text-center">
            Already Have an Account?{" "}
            <Link className="hover:underline underline-offset-1 hover:text-[#26ABA3]" to="/login">
              LogIn
            </Link>
          </p>
        </form>
        <CommonSignIn></CommonSignIn>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default SignUp;
