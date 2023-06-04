import React, { useEffect } from "react";
import FavoriteMovieWrapper from "../../components/Container/FavoriteMovieWrapper/FavoriteMovieWrapper";
import BackButton from "../../components/Presentational/BackButton/BackButton";

const FavoriteMovies = () => {
  useEffect(() => {
    document.title = "MovieX - Your Favorites";

    return () => {
      document.title = "MovieX: Your Premier Destination for Films";
    };
  }, []);

  return (
    <div>
      <BackButton />
      <FavoriteMovieWrapper />
    </div>
  );
};

export default FavoriteMovies;
