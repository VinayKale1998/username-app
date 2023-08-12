import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../UI/Button";
import { movieActions } from "../Store";

const Movies = () => {
  const dispatch = useDispatch();
  const display = useSelector((state) => state.display);
  const movies = useSelector((state) => state.movies);

  const clickHandler = (event) => {
    console.log(event.target.innerHTML);
    dispatch(movieActions.setValue({ movie: event.target.innerHTML }));
  };
  return (
    <div className="movie-row">
      {display.movies.map((item) => (
        <Button
          onClick={clickHandler}
          key={item}
          className={`movie-column  ${
            movies.value
              ? movies.value == item
                ? "movie-column-selected "
                : " "
              : ""
          }   ${
            movies.value ? (movies.value == item ? "bg-green-300 " : " ") : ""
          } text-xs transition-all sm:text-sm md:text-md lg:text-lg xl:text-xl  mx-1 my-1 px-1 py-1 border border-1 border-red-300 rounded-sm cursor-pointer hover:bg-green-200`}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default Movies;
