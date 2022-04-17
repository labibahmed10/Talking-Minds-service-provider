import React from "react";
import logo from "../../images/logo.svg";

const Footer = () => {
  return (
    <div className="pt-16 pb-5 bg-[#F4FCFA] text-slate-500">
      <div className="flex justify-around">
        <div className="flex gap-12">
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

        <div>
          <img src={logo} alt="" />
          <h2>Email: info@talkingminds.com</h2>
          <h2>Phone: 0163******0</h2>
        </div>
      </div>

      <h2 className="text-center mt-3 text-sm">Copyright &copy; 2022.All Rights Reserved to Labib Ahmed.</h2>
    </div>
  );
};

export default Footer;
