import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import video from "../assets/video.webm";

const Player = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="px-2 py-4">
        <div className="absolute p-6 z-10">
          <BsArrowLeft
            onClick={() => navigate(-1)}
            className="h-6 w-6 text-white cursor-pointer hover:text-veryLightGray"
          />
        </div>
        <video
          className="w-full h-auto object-contain"
          src={video}
          controls
          autoPlay
          muted
        ></video>
      </div>
    </>
  );
};

export default Player;
