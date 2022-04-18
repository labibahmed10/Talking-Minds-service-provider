import React, { useContext, useEffect } from "react";
import { ServiceContext } from "../../App";
import ServiceCard from "../ServiceCard/ServiceCard";

const MyService = () => {
  // using context api to share data
  const [services, setServices] = useContext(ServiceContext);

  // fetching data to show the service cards
  useEffect(() => {
    fetch("/service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="my-44 bg-[#F4FCFA] md:py-20 py-12">
      <div className="text-center text-slate-600">
        <h1 className="md:text-5xl text-4xl font-bold py-5">What I'm Offering</h1>
        <p className="md:text-2xl font-semibold">
          Consulting Experience untill you get fixed.I will check <br /> up every week no matter where you
          are.
        </p>
      </div>

      {/* service sections data from here */}
      <div className="grid md:grid-cols-3 grid-cols-1 gap-10 py-20 md:px-20 px-10 place-items-center">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default MyService;
