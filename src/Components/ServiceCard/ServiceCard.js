import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { image, name, text, price, id } = service;
  const navigate = useNavigate();

  return (
    // have used AOS animation
    <div
      data-aos="fade-down"
      data-aos-duration="1200"
      data-aos-anchor-placement="center-bottom"
      className="p-8 bg-white text-[#1e242c] rounded-2xl flex flex-col justify-between xl:w-96 h-full transform transition hover:scale-110 duration-500"
    >
      <img className="mx-auto" src={image} alt="" />
      <div className="py-4">
        <h1 className="text-3xl font-semibold pb-3">{name}</h1>
        <p className="text-gray-500">{text}</p>
        <h3 className="text-2xl font-semibold py-2">${price}</h3>
      </div>

      <button
        onClick={() => navigate(`/service/${id}`)}
        className="py-2 px-4 bg-[#26ABA3] rounded-full text-[aliceblue] font-semibold flex items-center mx-auto"
      >
        Place a Book <AiOutlineArrowRight className="ml-2" />
      </button>
    </div>
  );
};

export default ServiceCard;
