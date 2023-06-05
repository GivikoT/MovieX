/* eslint-disable react/prop-types */
import React from "react";
import styles from "./movieDetailsCard.module.css";

const MovieDetailCard = ({ movie, handleFavorites }) => {
  return (
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
  );
};

export default MovieDetailCard;
