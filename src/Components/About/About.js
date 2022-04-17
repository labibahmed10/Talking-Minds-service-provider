import React from "react";
import myself from "../../images/myself.png";

const About = () => {
  return (
    <div className="flex items-center justify-evenly my-28">
      <div>
        <img src={myself} alt="" />
        <p className="text-center text-2xl py-5">Labib Ahmed</p>
      </div>

      <div className="w-1/2">
        <h2 className="text-xl text-slate-500">
          I'm a Passionate,Hardworking person who is currently Learning Web Developement from Programming
          Hero.Last year I dreamt about bocoming a web developer and now I'm working hard day and night to
          achive goals at any cost.My goal is to know the very root of web developement related topics and I
          want to become a Full Stack Web Developer and I hope and believe I will achieve my goals one day.
        </h2>
      </div>
    </div>
  );
};

export default About;
