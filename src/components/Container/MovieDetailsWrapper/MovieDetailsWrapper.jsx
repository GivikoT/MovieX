/* eslint-disable react/prop-types */
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppContext } from "../../../context/AppContext";
import { favoriteMovie } from "../../../context/actions/AppContextActionsCreators";
import MovieDetailCard from "../../Presentational/MovieDetailCard/MovieDetailCard";

const MovieDetailsWrapper = ({ movie }) => {
  const { state, dispatch } = useAppContext();

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
      <MovieDetailCard movie={movie} handleFavorites={handleFavorites} />
    </div>
  );
};

export default MovieDetailsWrapper;
