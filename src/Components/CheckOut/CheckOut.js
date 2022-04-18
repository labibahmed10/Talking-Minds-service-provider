import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ServiceContext } from "../../App";
import CheckOutForm from "./CheckOutForm/CheckOutForm";

const CheckOut = () => {
  // used context to show the exact service a user wants to take.
  const [services] = useContext(ServiceContext);
  const { sID } = useParams();
  const matched = services.find((item) => item.id === parseInt(sID));

  return (
    <div>
      <p className="text-center mt-24 text-[#26ABA3]">Registration</p>

      <h1 className="text-center mb-10 text-4xl font-semibold text-[#26ABA3]">
        Want to Make an Appointment <br /> Easily
      </h1>

      <div className="border py-4 text-center mx-6 text-xl text-gray-500">
        <h2 className="text-2xl font-medium">Are You Sure You Want to Apply For This?</h2>
        <p>Service: {matched?.name}</p>
        <p>price: ${matched?.price}</p>
      </div>

      {/* form added here */}
      <CheckOutForm></CheckOutForm>
    </div>
  );
};

export default CheckOut;
