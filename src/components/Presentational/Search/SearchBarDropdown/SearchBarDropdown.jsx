/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React from "react";
import styles from "../../../Container/SearchBarWrapper/searchBar.module.css";

const SearchBarDropdown = ({ movies, value, redirectToMovieDetail }) => {
  return (
    <div className={styles.dropdown}>
      {movies
        .filter(
          (item) =>
            item.title.toLowerCase().includes(value.toLowerCase()) &&
            item.title !== value
        )
        .slice(0, 5)
        .map((item) => (
          <div
            key={item.id}
            className={styles.dropdown_row}
            onClick={() => redirectToMovieDetail(item)}
          >
            <img
              src={item.image}
              alt={item.title}
              className={styles.dropdown_image}
            />
            <span>{item.title}</span>
          </div>
        ))}
    </div>
  );
};

export default SearchBarDropdown;
