import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { removeFavMovie } from "../../../../context/actions/AppContextActionsCreators";
import FavoriteMovieCards from "../../../Presentational/FavoriteMovieCards/FavoriteMovieCards";
import { useAppContext } from "../../../../context/AppContext";

const FavoriteMovieCardsContainer = () => {
  const { state, dispatch } = useAppContext();
  const { favMovies } = state;
  const [pageSize, setPageSize] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [showButton, setShowButton] = useState(false);

  const navigate = useNavigate();

  const loadMovies = () => {
    const increment = 20;
    setPageSize((prev) => prev + increment);
    setCurrentPage((prev) => prev + 1);
  };

  const removeHandler = (movie) => {
    dispatch(removeFavMovie(movie));
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

  return (
    <FavoriteMovieCards
      favMovies={favMovies}
      pageSize={pageSize}
      removeHandler={removeHandler}
      navigate={navigate}
      showButton={showButton}
    />
  );
};

export default FavoriteMovieCardsContainer;
