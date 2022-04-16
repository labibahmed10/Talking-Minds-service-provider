import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="flex items-center justify-between md:px-20 px-6 md:py-4 py-2 bg-[#F4FCFA] text-[1.1rem] font-semibold">
      <img src={logo} alt="" />
      <div className="sm:space-x-8 flex sm:flex-row flex-col">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#26ABA3] underline underline-offset-2" : "text-slate-500"
          }
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#26ABA3] underline underline-offset-2" : "text-slate-500"
          }
          to="/blogs"
        >
          Blogs
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#26ABA3] underline underline-offset-2" : "text-slate-500"
          }
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#26ABA3] underline underline-offset-2" : "text-slate-500"
          }
          to="login"
        >
          LogIn
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#26ABA3] underline underline-offset-2" : "text-slate-500"
          }
          to="signup"
        >
          SignUp
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
