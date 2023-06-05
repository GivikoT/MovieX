import React from "react";
import styles from "./LoaderHandler.module.css";

const LoaderHandler = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.custom_loader}></div>
    </div>
  );
};

export default LoaderHandler;
