/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from "react";
import Flickity from "flickity";
import "flickity/css/flickity.css";
import "./heroSlider.scss";
import { useNavigate } from "react-router-dom";
import { MOVIES } from "../../../constants/routes";

const HeroSlider = ({ movie }) => {
  const navigate = useNavigate();
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = new Flickity(carouselRef.current, {
      accessibility: true,
      prevNextButtons: true,
      pageDots: true,
      setGallerySize: false,
      arrowShape: {
        x0: 10,
        x1: 60,
        y1: 50,
        x2: 60,
        y2: 45,
        x3: 15,
      },
      autoPlay: true,
      wrapAround: true,
    });

    carousel.on("scroll", () => {
      carousel.slides.forEach((slide) => {
        const image = slide.cells[0].element;
        const x = (slide.target + carousel.x) * (-1 / 3);
        image.style.backgroundPosition = `${x}px`;
      });
    });

    return () => {
      carousel.destroy();
    };
  }, []);

  return (
    <div className="hero-slider" data-carousel ref={carouselRef}>
      {movie.slice(0, 5).map((movie) => (
        <div
          className="carousel-cell"
          style={{
            backgroundImage: `url(${movie.image})`,
          }}
          key={movie.id}
        >
          <div className="overlay"></div>
          <div className="inner">
            <h3 className="subtitle">{movie.description}</h3>
            <h2 className="title">{movie.title}</h2>
            <button
              className="hero_btn"
              onClick={() => navigate(`${MOVIES}/${movie.title}`)}
            >
              See More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSlider;
