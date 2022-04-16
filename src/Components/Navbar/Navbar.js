import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../images/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between md:px-20 px-6 md:py-4 py-3 bg-[#F4FCFA] text-[1.1rem] font-semibold relative shadow-lg">
      <img onClick={() => navigate("/home")} className="cursor-pointer" src={logo} alt="" />

      <div onClick={() => setShowNav(!showNav)} className="sm:hidden cursor-pointer">
        <GiHamburgerMenu></GiHamburgerMenu>
      </div>

      <div
        className={`sm:space-x-8 flex sm:flex-row flex-col absolute  sm:static ${
          showNav ? "block items-center top-12 right-0 duration-500 bg-[#F4FCFA] w-full p-4" : "top-[-300px]"
        }`}
      >
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
