import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SavedMovies from "../components/SavedMovies";
import netflix from "../assets/netflix.jpg";

const Account = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <>
      <Navbar isScrolled={isScrolled} />
      <div className="w-full text-white">
        <div className="w-[100%] h-[80vh]">
          <img
            className="w-[100%] h-[80vh] object-cover"
            src={netflix}
            alt="Background"
          />
          <div className="bg-black/60 w-full h-full absolute top-0 left-0"></div>
        </div>
        <div className="absolute top-[25%] py-8 px-4 md:left-[10%] md:w-[80%] lg:left-[15%] lg:w-[70%]">
          <h1 className="text-bold text-3xl md:text-5xl">My Movies</h1>
        </div>
      </div>
      <SavedMovies />
    </>
  );
};

export default Account;
