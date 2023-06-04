/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import styles from "./movieTable.module.css";
import { useNavigate } from "react-router-dom";
import { MOVIES } from "../../../constants/routes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MovieTable from "../../Presentational/MovieTable/MovieTable";
import ScrollToTopButton from "../../Presentational/ScrollToTopButton/ScrollToTopButton";
import { useAuthContext } from "../../../context/auth/AuthContext";
import { favoriteMovie } from "../../../context/auth/actions/AuthContextActionsCreators";

const MoviesPageWrapper = ({ movies }) => {
  const [pageSize, setPageSize] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [showButton, setShowButton] = useState(false);

  const navigate = useNavigate();

  const loadMovies = () => {
    const increment = 20;
    setPageSize((prev) => prev + increment);
    setCurrentPage((prev) => prev + 1);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 10) {
        loadMovies();
      }

      if (scrollTop > 200) {
        setShowButton(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentPage]);

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

  const navigateToMovie = (movie) => {
    navigate(`${MOVIES}/${movie.title}`);
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
          {movies.slice(0, pageSize).map((movie, index) => (
            <MovieTable
              key={movie.id}
              movie={movie}
              index={index}
              handleFavorites={handleFavorites}
              navigateToMovie={navigateToMovie}
            />
          ))}
        </tbody>
      </table>
      {showButton && <ScrollToTopButton top={scrollToTop} />}
    </div>
  );
};

export default MoviesPageWrapper;
