import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="content">
          <div className="top">
            <div className="logo-details">
              <i className="fab fa-slack"></i>
              <span className="logo-name">MovieX</span>
            </div>
            <div className="media-icons">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div className="link-boxes">
            <ul className="box">
              <li className="link-name">Company</li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Movies</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
            <ul className="box">
              <li className="link-name">Subscriptions</li>
              <li>
                <a href="#">Memberships</a>
              </li>
              <li>
                <a href="#">Loyalty Program</a>
              </li>
              <li>
                <a href="#">Payments</a>
              </li>
              <li>
                <a href="#">Exclusivity</a>
              </li>
            </ul>
            <ul className="box">
              <li className="link-name">Account</li>
              <li>
                <a href="#">Profile</a>
              </li>
              <li>
                <a href="#">My Account</a>
              </li>
              <li>
                <a href="#">Favorite Movies</a>
              </li>
              <li>
                <a href="#">Wait List</a>
              </li>
            </ul>
            <ul className="box">
              <li className="link-name">Cinema</li>
              <li>
                <a href="#">Movies</a>
              </li>
              <li>
                <a href="#">TV Shows</a>
              </li>
              <li>
                <a href="#">Animations</a>
              </li>
              <li>
                <a href="#">Documentaries</a>
              </li>
            </ul>
            <ul className="box input-box">
              <li className="link-name">Subscribe</li>
              <li>
                <input type="text" placeholder="Enter your email" />
              </li>
              <li>
                <input type="button" value="Subscribe" />
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom-details">
          <div className="bottom-text">
            <span className="copyright">
              Copyright &#169; 2023 <a href="#">NiceGuyZ.</a> All rights
              reserved
            </span>
            <span className="policy-terms">
              <a href="#">Privacy policy</a>
              <a href="#">Terms & Conditions</a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
