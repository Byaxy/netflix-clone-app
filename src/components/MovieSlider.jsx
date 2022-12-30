import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Movie from "./Movie";

const MovieSlider = ({ data, title, rowId }) => {
  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <div className="w-full px-6 md:px-8 flex flex-col gap-4 py-4 relative z-10 h-full">
      <h2 className="text-white text-lg md:text-2xl font-bold px-2">{title}</h2>
      <div className="relative flex items-center group w-full">
        <MdChevronLeft
          onClick={slideLeft}
          className="absolute -left-4 bg-white rounded-full opacity-50 hover:opacity-100 cursor-pointer z-[100]  hidden group-hover:block"
          size={35}
        />
        <div
          id={"slider" + rowId}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative z-[50] important"
        >
          {data.map((movie, index) => {
            return <Movie movie={movie} index={index} key={movie.id} />;
          })}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="absolute -right-4 bg-white rounded-full opacity-50 hover:opacity-100 cursor-pointer z-[100] hidden group-hover:block"
          size={35}
        />
      </div>
    </div>
  );
};

export default MovieSlider;
