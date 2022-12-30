import React from "react";
import hometv from "../assets/hometv.jpg";
import mobile from "../assets/mobile.jpg";
import homeimac from "../assets/homeimac.jpg";
import kids from "../assets/kids.png";

const data = [
  {
    image: hometv,
    title: "Enjoy on your TV.",
    desc: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
    position: "row",
  },
  {
    image: mobile,
    title: "Download your shows to watch offline.",
    desc: "Save your favorites easily and always have something to watch.",
    position: "",
  },
  {
    image: homeimac,
    title: "Watch everywhere.",
    desc: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    position: "row",
  },
  {
    image: kids,
    title: "Create profiles for kids.",
    desc: "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
    position: "",
  },
];

const Section = () => {
  return (
    <>
      {data.map((row, index) => {
        return (
          <div
            className={
              row.position === "row"
                ? `text-white w-full py-10 flex flex-col items-center justify-center border-t-8 border-solid border-grayColor border-x- border-b-0 lg:flex-row lg:justify-between sm:px-1 md:px-6 lg:px-24`
                : `text-white w-full py-10 flex flex-col items-center justify-center border-t-8 border-solid border-grayColor border-x-0 border-b-0 lg:flex-row-reverse lg:justify-between sm:px-1 md:px-6 lg:px-24`
            }
          >
            <div className="flex flex-col items-center justify-center text-center px-4 lg:text-left lg:items-start flex-1">
              <h2 className="text-2xl font-extrabold py-4 md:text-3xl lg:text-4xl">
                {row.title}
              </h2>
              <h4 className="text-xl text-veryLightGray lg:text-2xl lg:font-semibold lg:text-white">
                {row.desc}
              </h4>
            </div>
            <div className="flex-1">
              <img src={row.image} alt="" />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Section;
