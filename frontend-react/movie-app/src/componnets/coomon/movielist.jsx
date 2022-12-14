import React from "react";
import AddFavourites from "./addfavorite";

const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;
  return (
    <>
      {props.movies.map((movie, index) => (
        <div
          key={index}
          className="image-container d-flex justify-content-start m-3"
          style={{ width: "300px" }}
        >
          <img src={movie.Poster} alt="movie"></img>

          <div
            onClick={() => props.handleFavouritesClick(movie)}
            className="overlay d-flex align-items-center justify-content-center"
          >
            <AddFavourites movie={movie} />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
