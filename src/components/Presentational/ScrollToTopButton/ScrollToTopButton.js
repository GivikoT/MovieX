/* eslint-disable react/prop-types */
import React from "react";
import styles from "./scrollToTopButton.module.css";

const ScrollToTopButton = ({ top }) => {
  return (
    <button className={styles.scroll_to_top_button} onClick={top}>
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
};

export default ScrollToTopButton;
