import React from "react";
import Banner from "../Banner/Banner";
import ExtraSection from "../ExtraSection/ExtraSection";
import MyService from "../MyService/MyService";

import "./Homepage.css";
const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <MyService></MyService>
      <ExtraSection></ExtraSection>
    </div>
  );
};

export default HomePage;
