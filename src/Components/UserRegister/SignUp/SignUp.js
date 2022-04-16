import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.svg";
import CommonSignIn from "../CommonSignIn/CommonSignIn";
const SignUp = () => {
  return (
    <div className="w-[34rem] mx-auto mt-24">
      <div>
        <img className="mx-auto" src={logo} alt="" />
      </div>
      <div className="mt-10 px-8">
        <form action="">
          <input
            className="w-full bg-[#F4FCFA] mb-3 py-4 px-3 mx-auto focus:outline outline-[#26ABA3]"
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
          />
          <input
            className="w-full bg-[#F4FCFA] mb-3 py-4 px-3 mx-auto focus:outline outline-[#26ABA3]"
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
          />
          <input
            className="w-full bg-[#F4FCFA] mb-3 py-4 px-3 mx-auto focus:outline outline-[#26ABA3]"
            type="password"
            name="password"
            id="password"
            placeholder="Your Password"
          />
          <input
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
      </div>
    </div>
  );
};

export default SignUp;
