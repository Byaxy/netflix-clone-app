import React from "react";
import MovieSlider from "./MovieSlider";

const Slider = ({ movies }) => {
  const getMoviesFromRange = (from, to) => {
    return movies.slice(from, to);
  };

  return (
    <>
      <MovieSlider
        title="Trending Now"
        data={getMoviesFromRange(0, 10)}
        rowId="1"
      />
      <MovieSlider
        title="New Releases"
        data={getMoviesFromRange(10, 20)}
        rowId="2"
      />
      <MovieSlider
        title="Popular On Netflix"
        data={getMoviesFromRange(20, 30)}
        rowId="3"
      />
      <MovieSlider
        title="Blockbuster Movies"
        data={getMoviesFromRange(30, 40)}
        rowId="4"
      />
      <MovieSlider
        title="Action Movies"
        data={getMoviesFromRange(40, 50)}
        rowId="5"
      />
      <MovieSlider title="Epics" data={getMoviesFromRange(50, 60)} rowId="6" />
    </>
  );
};

export default Slider;
