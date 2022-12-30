import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import NotAvailable from "../components/NotAvailable";
import SelectGenres from "../components/SelectGenres";
import Slider from "../components/Slider";
import { fetchMovies, getGenres } from "../store";

const Series = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const movies = useSelector((state) => state.netflix.movies);
  const genres = useSelector((state) => state.netflix.genres);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  useEffect(() => {
    if (genresLoaded) dispatch(fetchMovies({ type: "tv" }));
  }, [dispatch, genresLoaded]);

  return (
    <>
      <div className="w-full h-full">
        <Navbar isScrolled={isScrolled} />
      </div>
      <div className="w-full h-full mt-[8rem]">
        <div className="px-4 md:px-12 mb-6">
          <SelectGenres genres={genres} type="tv" />
        </div>
        {movies?.length ? <Slider movies={movies} /> : <NotAvailable />}
      </div>
    </>
  );
};

export default Series;
