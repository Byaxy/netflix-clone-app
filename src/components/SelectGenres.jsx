import React from "react";
import { useDispatch } from "react-redux";
import { fetchDataByGenre } from "../store";

const SelectGenres = ({ genres, type }) => {
  const dispatch = useDispatch();

  return (
    <select
      className="cursor-pointer text-lg text-white bg-grayColor px-3 py-2 rounded font-bold"
      onChange={(e) =>
        dispatch(fetchDataByGenre({ genre: e.target.value, type }))
      }
    >
      {genres?.map((genre) => {
        return (
          <option value={genre.id} key={genre.id}>
            {genre.name}
          </option>
        );
      })}
    </select>
  );
};

export default SelectGenres;
