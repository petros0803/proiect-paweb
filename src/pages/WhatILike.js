import React from "react";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./WhatILike.module.css";

const WhatILike = () => {
  return (
    <div>
      <p>
        I'm passionate about the web programming. Click an image below and you
        will be redirected to a tutorial.
      </p>
      <div className={classes.images}>
        <ul>
          <il>
            <a href="https://www.w3schools.com/html/" target="_blank">
              <FontAwesomeIcon
                icon={faHtml5}
                className={classes.FontAwesomeIcon}
              />
            </a>
          </il>
          <il>
            <a href="https://www.w3schools.com/css/" target="_blank">
              <FontAwesomeIcon
                icon={faCss3}
                className={classes.FontAwesomeIcon}
              />
            </a>
          </il>
          <il>
            <a href="https://www.w3schools.com/js/DEFAULT.asp" target="_blank">
              <FontAwesomeIcon
                icon={faJs}
                className={classes.FontAwesomeIcon}
              />
            </a>
          </il>
          <il>
            <a href="https://reactjs.org/" target="_blank">
              <FontAwesomeIcon
                icon={faReact}
                className={classes.FontAwesomeIcon}
              />
            </a>
          </il>
        </ul>
      </div>
      <p>
        I also play a lot of video games,{" "}
        <a
          href="https://worldofwarcraft.com/en-us/"
          target="_blank"
          className={classes.textDifferentColor}
        >
          {" "}
          World of Warcraft{" "}
        </a>{" "}
        beeing top 1 for me.
      </p>
    </div>
  );
};

export default WhatILike;
