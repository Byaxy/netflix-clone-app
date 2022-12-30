import React from "react";
import FaqSection from "../components/FaqSection";
import RowSection from "../components/RowSection";
import Signup from "../components/Signup";

const Home = () => {
  return (
    <>
      <Signup />
      <RowSection />
      <FaqSection />
    </>
  );
};

export default Home;
