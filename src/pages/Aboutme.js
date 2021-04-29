import React from "react";
import Me from "../images/me2.png";
import classes from "./Aboutme.module.css";
import AboutmePage from "./AboutmePage";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Aboutme = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.leftContainer}>
        {props.leftPage}
      </div>
      <div className={classes.rightContainer}>
        <img src={Me} alt="Me" className={classes.meImage} />
        <p>
          Hello, my name is{" "}
          <a className={classes.textDifferentColor}> Bogdan. </a>{" "}
        </p>
        <p>Contact me at</p>
        <p>b.petrosceac@gmail.com</p>
        <div className={classes.rightContainerIcons}>
          <p>
            <a
              href="https://www.facebook.com/bogdanciprian.petrosceac/"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className={classes.FontAwesomeIcon}
              />{" "}
            </a>
          </p>
          <p>
            <a href="https://github.com/petros0803" target="_blank">
              <FontAwesomeIcon
                icon={faGithub}
                className={classes.FontAwesomeIcon}
              />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
