import React from "react";
import classes from "./footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About the App</h2>
          <p>This is a MERN Stack project about a real estate app</p>
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <span>Phone: +251 912704375</span>
          <span>Email: Yabtsega2022@gmail.com</span>
          <span>GitHub: yeabtsega45</span>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <span>Continent: Africa</span>
          <span>Country: Ethiopia</span>
          <span>Current Location: Ethiopia</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
