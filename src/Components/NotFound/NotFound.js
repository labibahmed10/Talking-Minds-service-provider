import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    // image added by using custom css
    <div className="backgrounderror h-[92.2vh] flex sm:items-center items-start sm:justify-start justify-center">
      <div className="sm:ml-10">
        <h1 className="md:text-6xl sm:text-4xl text-3xl mt-20 text-[aliceblue] mx-auto">Oopppppppssss</h1>
        <button
          onClick={() => navigate("/")}
          className="sm:text-xl md:text-2xl text-xl py-2 sm:mt-10 mt-5 mx-auto bg-[#26ABA3] rounded-full px-5  text-[aliceblue]"
        >
          Back To Homepage
        </button>
      </div>
    </div>
  );
};

export default NotFound;
