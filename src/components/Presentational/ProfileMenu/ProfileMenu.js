/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import styles from "./profileMenu.module.css";
import { useAuthContext } from "../../../context/auth/AuthContext";
import { logOut } from "../../../context/auth/actions/AuthContextActionsCreators";
import { useNavigate } from "react-router-dom";
import { SIGN_IN } from "../../../constants/routes";

const ProfileMenu = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const { state, dispatch } = useAuthContext();

  const navigate = useNavigate();

  return (
    <div className={styles.profile_dropdown}>
      <div className={styles.profile_dropdown_btn} onClick={toggleMenu}>
        <div className={styles.profile_img}>
          <i className="fa-solid fa-circle"></i>
        </div>
        <span>
          {state?.user?.userName}
          <i className="fa-solid fa-angle-down"></i>
        </span>
      </div>

      <ul
        className={`${styles["profile_dropdown_list"]} ${
          menuActive ? styles.active : ""
        }`}
      >
        <hr />
        <li
          className={styles.profile_dropdown_list_item}
          onClick={() => {
            dispatch(logOut());
            navigate(SIGN_IN);
          }}
        >
          <a href="#">
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            Log Out
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ProfileMenu;
