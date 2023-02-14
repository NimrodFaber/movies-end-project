import { getAllFavorite, delFromFav } from "../../services/favoriteservice.js";
import { useState, useEffect } from "react";
import PageHeader from "../coomon/PageHeader";
import FavoriteChiled from "./favoritechiled";
function Favorite() {
  const [favorite, setFavorite] = useState([]);
  const [movies, setMovies] = useState([]);
  console.log(movies);
  const [data, setData] = useState([]);
  const removeFav = async (id, fav) => {
    await delFromFav(id, fav);
  };
  useEffect(() => {
    async function getAll() {
      const { data } = await getAllFavorite();
      setFavorite(data);

      const fmovies = [];
      for (let i = 0; i < data.length; i++) {
        const url = `http://www.omdbapi.com/?s=${data[i]}&apikey=aea06659`;
        const response = await fetch(url);
        const responseJson = await response.json();
        const obj = responseJson.Search;

        if (obj) fmovies.push(obj[0]);
      }
      setMovies(fmovies);
    }

    getAll();
  }, []);

  return (
    <>
      <PageHeader
        title="favorite"
        description="here is all of your favorite movie"
      />

      <div className="row">
        {movies.map((movie) => (
          <FavoriteChiled
            key={movie.indbId}
            movie={movie}
            removeFav={removeFav}
          />
        ))}
      </div>
    </>
  );
}

export default Favorite;
