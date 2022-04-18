import React from "react";
import myself from "../../images/myself.png";

const About = () => {
  return (
    <div>
      <h1 className="md:text-5xl text-2xl text-center my-5 font-semibold text-[#26ABA3]">About Me</h1>
      <div className="flex items-center md:flex-row flex-col  justify-evenly my-28">
        <div className="px-5">
          <img src={myself} alt="" />
          <p className="text-center text-2xl py-5">Labib Ahmed</p>
        </div>

        <div className="sm:w-1/2 px-5">
          <h2 className="text-xl text-slate-500">
            I'm a Passionate,Hardworking person who is currently Learning Web Developement from Programming
            Hero.Last year I dreamt about bocoming a web developer and now I'm working hard day and night to
            achive goals at any cost.My goal is to know the very root of web developement related topics and I
            want to become a Full Stack Web Developer and I hope and believe I will achieve my goals one day.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default About;
