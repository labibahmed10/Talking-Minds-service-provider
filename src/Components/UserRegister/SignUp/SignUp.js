import React, { useRef, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../../firebase.init";
import logo from "../../../images/logo.svg";
import SpinnerLoading from "../../Spinner/SpinnerLoading";
import CommonSignIn from "../CommonSignIn/CommonSignIn";

const SignUp = () => {
  const emailRef = useRef("");
  const nameRef = useRef("");
  const passRef = useRef("");
  const conPassRef = useRef("");

  const [check, setChecked] = useState();
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, {
    sendEmailVerification: true,
  });

  const handleCreateUserForm = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passRef.current.value;
    const conPass = conPassRef.current.value;

    if (!name || !password || !email || !conPass) {
      toast.error("Please Fill Up The Form", {
        position: "top-center",
        autoClose: 2500,
      });
    }

    if (password !== conPass) {
      toast.error("Password Did Not Matched!,Try Again!", {
        position: "top-center",
        autoClose: 2500,
      });
    } else {
      createUserWithEmailAndPassword(email, password);
    }
  };

  if (user) {
    navigate("/login");
  }

  return (
    <div className="w-[34rem] mx-auto mt-24">
      <div>
        <img className="mx-auto" src={logo} alt="" />
      </div>
      <div className="mt-10 px-8">
        <form onSubmit={handleCreateUserForm}>
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

          <div className="flex items-center space-x-1">
            <input
              onClick={() => setChecked(!check)}
              className="w-4 h-5"
              type="checkbox"
              name="check"
              id="check"
            />
            <label htmlFor="check">I Agree With The Terms & Condition</label>
          </div>

          <input
            disabled={!check}
            className={`w-full my-3 py-3 text-lg font-semibold text-[aliceblue] ${
              check ? "bg-[#26ABA3]" : "bg-[#15615c]"
            }`}
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
        <ToastContainer theme="dark"></ToastContainer>
      </div>
    </div>
  );
};

export default SignUp;
