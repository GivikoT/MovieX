/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import "./movieSection.css";
import { useNavigate } from "react-router-dom";
import { MOVIES } from "../../../constants/routes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthContext } from "../../../context/auth/AuthContext";
import { favoriteMovie } from "../../../context/auth/actions/AuthContextActionsCreators";

const MovieSection = ({ movies }) => {
  const navigate = useNavigate();

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
    <div className="movie-section">
      <h2>Top Picks</h2>
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
      <Swiper
        slidesPerView={5}
        spaceBetween={0}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {movies.slice(10, 30).map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="card">
              <div className="ribbon">
                <span>POPULAR</span>
              </div>
              <img
                onClick={() => navigate(`${MOVIES}/${movie.title}`)}
                src={movie.image}
                alt={movie.title}
              />
              <div className="info">
                <p className="title">{movie.title}</p>
                <p className="rating"> ⭐{movie.rating}</p>
              </div>
              <div className="hover-content">
                <button
                  className="add-to-favorites"
                  onClick={() => handleFavorites(movie)}
                >
                  Add to Favorites
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <div
            className="card transparent-card"
            onClick={() => navigate(MOVIES)}
          >
            <p className="check-out-more">CHECK OUT MORE</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MovieSection;
