import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";

const Main = ({ movies }) => {
  const navigate = useNavigate();
  const [saved, setSaved] = useState(false);
  const movie = movies[Math.floor(Math.random() * movies.length)];

  const { user } = UserAuth();

  const moveiID = doc(db, "users", `${user?.email}`);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + " ...";
    } else {
      return str;
    }
  };

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
  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="w-full h-[550px] absolute bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.image}`}
          alt={movie?.name}
        />
      </div>
      <div className="absolute w-full top-[30%] p-4 md:p-8">
        <h1 className="text-3xl md:text-5xl font-bold">{movie?.name}</h1>
        <div className="my-4">
          <button
            onClick={() => navigate("/player")}
            className="border bg-gray-300 text-black border-gray-300 px-5 py-2"
          >
            Play
          </button>
          <button
            className="border text-white border-gray-300 px-5 py-2 ml-4"
            onClick={saveMovie}
          >
            Watch Later
          </button>
        </div>
        <p className="text-sm text-gray-400">Released: {movie?.releaseDate}</p>
        <p className="text-gray-200 py-2 w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]">
          {truncateString(movie?.desc, 150)}
        </p>
      </div>
    </div>
  );
};

export default Main;
