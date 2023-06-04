/* eslint-disable react/prop-types */
import React from "react";
import styles from "../../../Container/SearchBarWrapper/searchBar.module.css";

const SearchBarInput = ({ value, onChange }) => {
  return (
    <input
      type="text"
      name="text"
      className={styles.input}
      id="input"
      value={value}
      placeholder="Search"
      onChange={onChange}
    />
  );
};

export default SearchBarInput;
