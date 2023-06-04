import React, { useEffect } from "react";
import { useAuthContext } from "../../context/auth/AuthContext";
import HeroSlider from "../../components/Presentational/HeroSlider/HeroSlider";
import MovieSection from "../../components/Presentational/MovieSection/MovieSection";
import ErrorHandler from "../../components/Handlers/ErrorHandler/ErrorHandler";
import LoaderHandler from "../../components/Handlers/LoaderHandler/LoaderHandler";

const Home = () => {
  const { state } = useAuthContext();

  const { movies, error, isLoading } = state;

  useEffect(() => {
    document.title = "MovieX - Home";

    return () => {
      document.title = "MovieX: Your Premier Destination for Films";
    };
  }, []);

  if (error) {
    return <ErrorHandler />;
  }

  return (
    <div>
      {isLoading ? (
        <LoaderHandler />
      ) : (
        <div>
          <HeroSlider movie={movies} />
          <MovieSection movies={movies} />
        </div>
      )}
    </div>
  );
};

export default Home;
