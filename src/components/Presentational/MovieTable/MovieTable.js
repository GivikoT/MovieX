/* eslint-disable react/prop-types */
import React from "react";
import styles from "../../Container/MoviesPageWrapper/movieTable.module.css";

const MovieTable = ({ movie, index, handleFavorites, navigateToMovie }) => {
  return (
    <tr key={movie.id}>
      <td>{index + 1}</td>
      <td className={styles.image}>
        <img src={movie.image} alt={movie.title} />
      </td>
      <td className={styles.movieTitle} onClick={() => navigateToMovie(movie)}>
        {movie.title}
      </td>
      <td>{movie.director.join(", ")}</td>
      <td>{movie.year}</td>
      <td>⭐{movie.rating}</td>
      <td>{movie.genre.join(" / ")}</td>
      <td>
        <button
          className={styles.favorite}
          onClick={() => handleFavorites(movie)}
        >
          Add To Favorites
        </button>
        <button
          className={styles.see_more}
          onClick={() => navigateToMovie(movie)}
        >
          See More
        </button>
      </td>
    </tr>
  );
};

export default MovieTable;
