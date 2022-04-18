import React from "react";
import image from "../../images/heart.png";
import { motion } from "framer-motion";

const ExtraSection = () => {
  return (
    <div className="md:py-36 py-24 mb-28 bg-[#F4FCFA] flex md:flex-row flex-col-reverse md:justify-evenly text-slate-600">
      {/* Aos animation for left texts */}
      <div
        data-aos="fade-right"
        data-aos-offset="400"
        data-aos-duration="700"
        data-aos-easing="ease-in-sine"
        className="md:w-1/2 py-10 px-5"
      >
        <h1 className="md:text-6xl text-5xl font-semibold mb-10">
          Your Trust is My <br />
          Greatest <span className="text-[#26ABA3] ">Incentive</span>!
        </h1>

        <h2 className="md:text-3xl text-xl font-semibold">
          Do You Want to Transform Your Life For Better? I Care About Your Every Details & Commited to
          Empowering Your Potential!
        </h2>

        <button className="mt-8 py-2 px-5 bg-[#26ABA3] rounded-full text-[aliceblue]">Contact Us</button>
      </div>

      {/* Framer motion library used for the heart pic */}
      <motion.div
        animate={{
          scale: 0.9,
          transition: { duration: 0.5, yoyo: Infinity },
        }}
      >
        <img className="mx-auto md:px-0 px-5" src={image} alt="" />
      </motion.div>
    </div>
  );
};

export default ExtraSection;
