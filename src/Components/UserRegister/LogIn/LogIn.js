import React from "react";
import CommonSignIn from "../CommonSignIn";
import logo from "../../../images/logo.svg";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="w-[34rem] mx-auto mt-28">
      <div>
        <img className="mx-auto" src={logo} alt="" />
      </div>
      <div className="mt-10 mx-8">
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
    </div>
  );
};

export default LogIn;
