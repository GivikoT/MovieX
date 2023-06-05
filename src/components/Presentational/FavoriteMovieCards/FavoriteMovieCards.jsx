/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";
import { MOVIES } from "../../../constants/routes";
import styles from "./favoriteMovieCards.module.css";
const FavoriteMovieCards = ({
  favMovies,
  pageSize,
  removeHandler,
  navigate,
  showButton,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleRemove = (movie) => {
    removeHandler(movie);
    toast.success("📽️ Removed from your favorites!");
  };

  return (
    <div className={styles.movie_table_container}>
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
      <h2 className={styles.intro}>Your Favorite Movies</h2>
      <table className={styles.movie_table}>
        <thead>
          <tr>
            <th>Position</th>
            <th>Poster</th>
            <th>Title</th>
            <th>Director</th>
            <th>Year</th>
            <th>Rating</th>
            <th>Genre</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {favMovies.slice(0, pageSize).map((movie, index) => (
            <tr key={movie.id}>
              <td>{index + 1}</td>
              <td className={styles.image}>
                <img src={movie.image} alt={movie.title} />
              </td>
              <td
                className={styles.movieTitle}
                onClick={() => navigate(`${MOVIES}/${movie.title}`)}
              >
                {movie.title}
              </td>
              <td>{movie.director}</td>
              <td>{movie.year}</td>
              <td>⭐{movie.rating}</td>
              <td>{movie.genre.join(" / ")}</td>

              <td>
                <button
                  className={styles.remove}
                  onClick={() => handleRemove(movie)}
                >
                  Remove From Favorites
                </button>
                <button
                  className={styles.see_more}
                  onClick={() => navigate(`${MOVIES}/${movie.title}`)}
                >
                  See More
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showButton && <ScrollToTopButton top={scrollToTop} />}
    </div>
  );
};

export default FavoriteMovieCards;
