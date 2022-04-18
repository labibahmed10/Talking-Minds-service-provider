import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../images/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import { AiTwotoneUnlock } from "react-icons/ai";
import { GiNotebook } from "react-icons/gi";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  //log out button implemented here
  const logout = () => {
    signOut(auth);
  };

  return (
    <div className="flex items-center justify-between md:px-20 px-6 md:py-4 py-4 bg-[#F4FCFA] text-[1.1rem] font-semibold  shadow-lg">
      {/* brand logo */}
      <img onClick={() => navigate("/home")} className="cursor-pointer" src={logo} alt="" />

      {/* hamburger menu */}
      <div onClick={() => setShowNav(!showNav)} className="sm:hidden cursor-pointer relative">
        <GiHamburgerMenu></GiHamburgerMenu>
      </div>

      {/* whole navbar */}
      <div
        className={`sm:space-x-8 flex sm:flex-row flex-col absolute sm:static ${
          showNav ? "items-end top-16 right-0 duration-500 bg-[#F4FCFA] w-full p-4 block" : "top-[-300px]"
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
          About Me
        </NavLink>

        {/* if user is availavle login going to change in log out */}
        {user ? (
          <button
            onClick={logout}
            className="hover:text-[#26ABA3] hover:underline underline-offset-2 text-slate-500 font-semibold"
          >
            Log Out
          </button>
        ) : (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#26ABA3] underline underline-offset-2 flex items-center"
                : "text-slate-500 flex items-center"
            }
            to="/login"
          >
            <AiTwotoneUnlock className="mr-1"></AiTwotoneUnlock> LogIn
          </NavLink>
        )}
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#26ABA3] underline underline-offset-2 flex items-center"
              : "text-slate-500 flex items-center"
          }
          to="/signup"
        >
          <GiNotebook className="mr-1"></GiNotebook> Register
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
