import React from "react";
import image from "../../images/heart.png";
import { motion } from "framer-motion";

const ExtraSection = () => {
  return (
    <div className="py-36 mb-28 bg-[#F4FCFA] flex justify-evenly text-slate-600">
      <div
        data-aos="fade-right"
        data-aos-offset="400"
        data-aos-duration="700"
        data-aos-easing="ease-in-sine"
        className="w-1/2"
      >
        <h1 className="text-6xl font-semibold mb-10">
          Your Trust is My <br />
          Greatest <span className="text-[#26ABA3] ">Incentive</span>!
        </h1>

        <h2 className="text-3xl font-semibold">
          Do You Want to Transform Your Life For Better? I Care About Your Every Details & Commited to
          Empowering Your Potential!
        </h2>

        <button className="mt-8 py-2 px-5 bg-[#26ABA3] rounded-full text-[aliceblue]">Contact Us</button>
      </div>

      <motion.div
        animate={{
          scale: 0.9,
          transition: { duration: 0.5, yoyo: Infinity },
        }}
      >
        <img className="mx-auto" src={image} alt="" />
      </motion.div>
    </div>
  );
};

export default ExtraSection;
