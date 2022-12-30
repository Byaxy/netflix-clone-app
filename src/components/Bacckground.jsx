import React from "react";
import backgroung from "../assets/netflix.jpg";

const Bacckground = () => {
  return (
    <div className="w-[100%] h-[100vh]">
      <img
        className="w-[100%] h-[100vh] object-cover"
        src={backgroung}
        alt="Background"
      />
    </div>
  );
};

export default Bacckground;
