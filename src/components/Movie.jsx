import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { IoPlayCircleSharp } from "react-icons/io5";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BsCheck } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import video from "../assets/video.webm";

const Movie = ({ movie }) => {
  const [saved, setSaved] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { user } = UserAuth();

  const navigate = useNavigate();

  const moveiID = doc(db, "users", `${user?.email}`);

  const saveMovie = async () => {
    if (user?.email) {
      setSaved(true);

      await updateDoc(moveiID, {
        savedMovies: arrayUnion({
          id: movie.id,
          title: movie.name,
          img: movie.image,
          genres: movie.genres,
          desc: movie.desc,
          releaseDate: movie.releaseDate,
        }),
      });
    } else {
      alert("Please Log In to save a movie");
    }
  };

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + " ...";
    } else {
      return str;
    }
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] h-full inline-block cursor-pointer relative p-2 bg-black z-10"
    >
      <div className="h-full w-full">
        <img
          className="w-full h-auto block"
          src={`https://image.tmdb.org/t/p/w500/${movie?.image}`}
          alt={movie?.name}
        />
      </div>
      <div className="flex flex-col px-1 py-4 gap-1 sm:gap-3 justify-end text-white overflow-hidden">
        <h3 title={movie?.name} className="font-bold hover:text-lightGrayColor">
          {movie?.name}
        </h3>
        <div className="icons flex justify-between">
          <div className="flex gap-2 md:gap-4">
            <IoPlayCircleSharp
              className="md:h-4 md:w-4 text-lightGrayColor hover:text-white"
              title="Play"
              onClick={() => navigate("/player")}
            />
            <RiThumbUpFill
              className="md:h-4 md:w-4 text-lightGrayColor hover:text-white"
              title="Like"
            />
            <RiThumbDownFill
              className="md:h-4 md:w-4 text-lightGrayColor hover:text-white"
              title="Dislike"
            />
            {saved ? (
              <BsCheck
                className="md:h-4 md:w-4 text-lightGrayColor hover:text-white"
                title="Remove From List"
              />
            ) : (
              <AiOutlinePlus
                className="md:h-4 md:w-4 text-lightGrayColor hover:text-white"
                title="Add to My List"
              />
            )}
          </div>
          <div>
            <BiChevronDown
              className="md:h-4 md:w-4 text-lightGrayColor hover:text-white"
              title="More Info"
            />
          </div>
        </div>
        <div className="text-sm">
          <ul className="flex justify-between text-xs sm:text-sm text-lightGrayColor gap-2">
            {movie.genres.map((genre) => {
              return (
                <li className="hover:text-grayColor" key={genre}>
                  {genre}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {isHovered && (
        <div className="absolute top-0 left-0 w-full h-full bg-black text-white z-[100]">
          <video src={video} autoPlay muted loop></video>
          <div className="flex flex-col px-2 py-2 gap-1 sm:gap-2 justify-end text-white overflow-hidden">
            <h3
              title={movie?.name}
              className="font-bold hover:text-lightGrayColor"
            >
              {movie?.name}
            </h3>
            <div className="icons flex justify-between">
              <div className="flex gap-2 md:gap-4">
                <IoPlayCircleSharp
                  className="md:h-4 md:w-4 text-lightGrayColor hover:text-white"
                  title="Play"
                  onClick={() => navigate("/player")}
                />
                <RiThumbUpFill
                  className="md:h-4 md:w-4 text-lightGrayColor hover:text-white"
                  title="Like"
                />
                <RiThumbDownFill
                  className="md:h-4 md:w-4 text-lightGrayColor hover:text-white"
                  title="Dislike"
                />
                {saved ? (
                  <BsCheck
                    className="md:h-4 md:w-4 text-lightGrayColor hover:text-white"
                    title="Remove From List"
                  />
                ) : (
                  <AiOutlinePlus
                    onClick={saveMovie}
                    className="md:h-4 md:w-4 text-lightGrayColor hover:text-white"
                    title="Add to My List"
                  />
                )}
              </div>
              <div>
                <BiChevronDown
                  className="md:h-4 md:w-4 text-lightGrayColor hover:text-white"
                  title="More Info"
                />
              </div>
            </div>
            <div className="text-sm text-lightGrayColor w-full">
              <p className="whitespace-normal">
                {truncateString(movie?.desc, 50)}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movie;
