import React, { useContext, useEffect } from "react";
import { ServiceContext } from "../../App";
import ServiceCard from "../ServiceCard/ServiceCard";

const MyService = () => {
  const [services, setServices] = useContext(ServiceContext);

  useEffect(() => {
    fetch("/service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="my-44 bg-[#F4FCFA] py-20">
      <div className="text-center">
        <h1 className="text-5xl font-bold py-5">What I'm Offering</h1>
        <p className="text-2xl">
          Consulting Experience untill you get fixed.I will check <br /> up every week no matter where you
          are.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-10 py-20 px-20  place-items-center">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default MyService;
