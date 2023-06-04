/* eslint-disable react/prop-types */
import React from "react";
import styles from "./movieDetailsWrapper.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthContext } from "../../../context/auth/AuthContext";
import { favoriteMovie } from "../../../context/auth/actions/AuthContextActionsCreators";

const MovieDetailsWrapper = ({ movie }) => {
  const { state, dispatch } = useAuthContext();

  const handleFavorites = (movie) => {
    const isMovieInFavorites = state.favMovies.filter(
      (favMovie) => favMovie.id === movie.id
    );
    if (isMovieInFavorites.length > 0) {
      toast.error("📽️ Movie is already in your favorites!");
    } else {
      dispatch(favoriteMovie(movie));
      toast.success("📽️ Added to your favorites!");
    }
  };
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className={styles.container_details}>
        <div className={styles.poster}>
          <img src={movie.image} alt={movie.title} />
        </div>
        <div className={styles.info}>
          <h1 className={styles.movie_title}>{movie.title}</h1>
          <button
            className={styles.add_favorite_button}
            onClick={() => handleFavorites(movie)}
          >
            Add to Favorites
          </button>

          <div className={styles.set}>
            <label htmlFor="genre">Genre: </label>
            <span className={styles.genre}>{movie.genre.join(" / ")}</span>
          </div>
          <div className={styles.movie_detail}>
            <div className={styles.set}>
              <label htmlFor="year"> Release Year</label>
              <span>{movie.year}</span>
            </div>
            <div className={styles.set}>
              <label htmlFor="director">Director(s)</label>
              <span>{movie.director}</span>
            </div>
            <div className={styles.set}>
              <label htmlFor="writer">Writer(s)</label>
              <span>{movie.writers.join(", ")}</span>
            </div>
          </div>
          <div className={styles.movie_description}>{movie.description}</div>
          <div className={styles.movie_trailer}>
            <div className={styles.header}>Movie Trailer</div>
            <div className={styles.list}>
              <iframe
                width="560"
                height="315"
                src={movie.trailer}
                title="Movie Trailer"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsWrapper;
