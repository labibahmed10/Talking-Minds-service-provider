import React from "react";
import doctor from "../../images/doctor.png";

const Banner = () => {
  return (
    <div className="background h-[40rem] flex items-center justify-evenly">
      <div className="text-[aliceblue]">
        <h1 className="uppercase text-5xl font-semibold mb-8">
          Private mental health <br /> consultation from a <br /> professional
        </h1>

        <h2 className="text-3xl">
          I Care About Your Health More Than You do. <br />
          With Years Of Expeience & 35+ Patients Handling.
        </h2>

        <button className="my-6 py-3 px-5 bg-[#26ABA3] rounded-full font-semibold">Get a Consultaion</button>
      </div>

      <div>
        <img className="w-96" src={doctor} alt="" />
      </div>
    </div>
  );
};

export default Banner;
