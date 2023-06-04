import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BackButton.module.css";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button className={styles.edit_button} onClick={() => navigate(-1)}>
        <i className="fa-sharp fa-solid fa-arrow-left"></i>
      </button>
    </div>
  );
};

export default BackButton;
