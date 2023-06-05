import React from "react";
import { Link } from "react-router-dom";
import { MOVIES } from "../../../constants/routes";
import styles from "./favoriteMovieWrapper.module.css";
import FavoriteMovieCardsContainer from "./FavoriteMovieContainer/FavoriteMovieContainer";
import { useAppContext } from "../../../context/AppContext";

const FavoriteMovieWrapper = () => {
  const { state } = useAppContext();
  const { favMovies } = state;
  return (
    <div className={styles.favorite_movie_wrapper}>
      {favMovies.length > 0 ? (
        <FavoriteMovieCardsContainer />
      ) : (
        <div className={styles.empty_message}>
          <h1>No Favorite Movies</h1>
          <p>You haven&apos;t added any movies to your favorites yet.</p>
          <Link to={MOVIES} className={styles.browse_button}>
            Browse Movies
          </Link>
        </div>
      )}
    </div>
  );
};

export default FavoriteMovieWrapper;
