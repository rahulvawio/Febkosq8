import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faBlogger,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faSquareShareNodes,
} from "@fortawesome/free-solid-svg-icons";
export default function Socials() {
  return (
    <section align="left" className="Section px-2" id="Socials">
      <h2 className="display-1" align="center">
        Socials <FontAwesomeIcon icon={faSquareShareNodes} color="black" />
      </h2>

      <h4>
        <div className="blockquote">
          You can find me on{" "}
          <a
            href="https://github.com/febkosq8 "
            className="ms-2 btn-outline-dark btn"
          >
            <FontAwesomeIcon icon={faGithub} color="black" /> GitHub
          </a>
          <a
            href="https://www.instagram.com/febkosq8/ "
            className="ms-2 btn-outline-dark btn"
          >
            <FontAwesomeIcon icon={faInstagram} color="black" /> Instagram
          </a>
          <a
            href="mailto: febkosq8@yahoo.com"
            className="ms-2 btn-outline-dark btn"
          >
            <FontAwesomeIcon icon={faEnvelope} color="black" /> Email
          </a>
          <a
            href="http://www.febkosq8.tk/ "
            className="ms-2 btn-outline-dark btn"
          >
            <FontAwesomeIcon icon={faBlogger} color="black" /> Blog
          </a>
          <a
            href="https://www.instagram.com/febkosq8/ "
            className="ms-2 btn-outline-dark btn"
          >
            <FontAwesomeIcon icon={faInstagram} color="black" /> Instagram
          </a>
          <a
            href="https://www.instagram.com/febkosq8/ "
            className="ms-2 btn-outline-dark btn"
          >
            <FontAwesomeIcon icon={faInstagram} color="black" /> Instagram
          </a>
        </div>
      </h4>
    </section>
  );
}
