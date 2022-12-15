import React from "react";
import { favToDB } from "../../services/favoriteservice.js";

const AddFavourites = (props) => {
  const { movie } = props;
  async function addToFavorite(movie) {
    await favToDB(movie);
  }
  return (
    <>
      <span
        onClick={() => addToFavorite(movie.Title)}
        className="mr-2 text-white"
      >
        Add to Favourites
      </span>
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        class="bi bi-heart-fill"
        fill="red"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
        />
      </svg>
    </>
  );
};

export default AddFavourites;
