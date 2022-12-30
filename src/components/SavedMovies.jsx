import React, { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { AiOutlineClose } from "react-icons/ai";
import { IoPlayCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const SavedMovies = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedMovies);
    });
  }, [user?.email]);

  const movieRef = doc(db, "users", `${user?.email}`);
  const deleteMovie = async (paasedID) => {
    try {
      const result = movies.filter((movie) => movie.id !== paasedID);
      await updateDoc(movieRef, {
        savedMovies: result,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="py-8 w-full md:w-[80%] lg:w-[95%] md:mx-auto lg:mx-auto">
        <h2 className="text-white font-bold md:text-2xl">Saved Movies</h2>

        {movies.length !== 0 ? (
          <div className="relative flex items-center group pt-6">
            <MdChevronLeft
              onClick={slideLeft}
              className="absolute left-2 bg-white rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
              size={40}
            />
            <div
              id={"slider"}
              className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
            >
              {movies &&
                movies.map((movie, id) => (
                  <div
                    className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
                    key={movie.id}
                  >
                    <img
                      className="w-full h-auto block"
                      src={`https://image.tmdb.org/t/p/w500/${movie?.img}`}
                      alt={movie?.title}
                    />
                    <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 hover:bg-black/50 text-white">
                      <div className="w-full h-full items-start flex flex-col justify-end gap-2 p-4 overflow-hidden">
                        <p className="white-space-normal text-xs md:text-sm font-bold flex items-center">
                          {movie?.title}
                        </p>
                        <div className="w-full flex justify-between items-center text-veryLightGray">
                          <Link to="/player">
                            {" "}
                            <IoPlayCircleSharp className="h-6 w-6 hover:text-lightGrayColor " />
                          </Link>
                          <p className="hover:text-lightGrayColor ">
                            {movie?.releaseDate}
                          </p>
                        </div>
                      </div>

                      <p
                        onClick={() => deleteMovie(movie.id)}
                        className="text-white hover:text-lightGrayColor absolute top-4 right-4"
                      >
                        <AiOutlineClose />
                      </p>
                    </div>
                  </div>
                ))}
            </div>
            <MdChevronRight
              onClick={slideRight}
              className="absolute right-2 bg-white rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
              size={40}
            />
          </div>
        ) : (
          <h2 className="text-lg md:text-xl text-lightGrayColor my-12 text-center">
            You Don't Have Any Saved Movies.
          </h2>
        )}
      </div>
    </>
  );
};

export default SavedMovies;
