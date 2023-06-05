import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieDetailsWrapper from "../../components/Container/MovieDetailsWrapper/MovieDetailsWrapper";
import BackButton from "../../components/Presentational/BackButton/BackButton";
import ErrorHandler from "../../components/Handlers/ErrorHandler/ErrorHandler";
import LoaderHandler from "../../components/Handlers/LoaderHandler/LoaderHandler";
import { useAppContext } from "../../context/AppContext";

const MovieDetail = () => {
  const { movieTitle } = useParams();
  const { state } = useAppContext();
  const { movies, error, isLoading } = state;

  useEffect(() => {
    document.title = `Moviex: ${movieTitle}`;

    return () => {
      document.title = "MovieX: Your Premier Destination for Films";
    };
  }, []);

  const movie = movies.find((movie) => movie.title === movieTitle);

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
          <MovieDetailsWrapper movie={movie} />
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
