import React, { useEffect } from "react";
import { useAuthContext } from "../../context/auth/AuthContext";
import styles from "./movies.module.css";
import BackButton from "../../components/Presentational/BackButton/BackButton";
import ErrorHandler from "../../components/Handlers/ErrorHandler/ErrorHandler";
import LoaderHandler from "../../components/Handlers/LoaderHandler/LoaderHandler";
import MoviesPageWrapper from "../../components/Container/MoviesPageWrapper/MoviesPageWrapper";

const Movies = () => {
  const { state } = useAuthContext();
  const { movies, error, isLoading } = state;

  useEffect(() => {
    document.title = "MovieX - Browse Movies";

    return () => {
      document.title = "MovieX: Your Premier Destination for Films";
    };
  }, []);

  if (error) {
    return <ErrorHandler />;
  }

  return (
    <div>
      <BackButton />
      {isLoading ? (
        <LoaderHandler />
      ) : (
        <div>
          <h2 className={styles.title_page}>Top 100 Movies of All Time</h2>
          <MoviesPageWrapper movies={movies} />
        </div>
      )}
    </div>
  );
};

export default Movies;
