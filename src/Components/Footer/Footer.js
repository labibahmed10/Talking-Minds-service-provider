import React from "react";
import logo from "../../images/logo.svg";

const Footer = () => {
  return (
    <div className="pt-16 pb-5 bg-[#F4FCFA] text-slate-500">
      <div className="flex md:flex-row flex-col-reverse md:justify-around mb-10">
        {/* footer left side texts */}
        <div className="flex justify-between md:justify-around md:gap-40 px-5 md:px-0 mt-10 sm:mt-0">
          <div className="leading-8">
            <h1 className="text-2xl font-semibold">Quick Links</h1>
            <p>Learn More</p>
            <p>About Talking Minds</p>
            <p>Careers</p>
          </div>

          <div className="leading-8">
            <h1 className="text-2xl font-semibold">Support</h1>
            <p>Mission & Vision</p>
            <p>Our Approach</p>
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
          </div>
        </div>

        {/* right sides image */}
        <div className="mx-auto md:mx-0">
          <img src={logo} alt="" />
          <h2>Email: info@talkingminds.com</h2>
          <h2>Phone: 0163******0</h2>
        </div>
      </div>

      {/* copyright text */}
      <h2 className="text-center mt-3 text-sm">Copyright &copy; 2022.All Rights Reserved to Labib Ahmed.</h2>
    </div>
  );
};

export default Footer;
