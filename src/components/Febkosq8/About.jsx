import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faAddressCard,
  faGraduationCap,
  faHouseLaptop,
  faBlog,
  faPeopleArrows,
  faBriefcase,
  faPersonCircleQuestion,
  faHeadset,
  faHandSparkles,
} from "@fortawesome/free-solid-svg-icons";
export default function About() {
  return (
    <section align="left" className="section px-2" id="aboutMe">
      <h2 className="display-1" align="center">
        About Me <FontAwesomeIcon icon={faAddressCard} color="black" />
      </h2>
      <div>
        {" "}
        <p>
          <FontAwesomeIcon icon={faBlog} color="black" /> Blog random tech stuff
          at
          <a
            href="http://www.febkosq8.tk/ "
            className="ms-2 btn-outline-dark btn btn-sm"
          >
            febkosq8.tk
          </a>
        </p>
        <p>
          <FontAwesomeIcon icon={faHouseLaptop} color="black" /> Currently
          working on
          <a href="/Jappan" className="ms-2 btn-outline-dark btn btn-sm">
            Jappan
          </a>
        </p>
        <p>
          <FontAwesomeIcon icon={faGraduationCap} color="black" /> Master of
          Science in Advanced Computer Science from
          <a
            href="https://le.ac.uk/"
            className="ms-2 btn-outline-dark btn btn-sm"
          >
            University of Leicester
          </a>
        </p>
        <p>
          <FontAwesomeIcon icon={faGraduationCap} color="black" /> Bachelor of
          Technology in Computer Science and Engineering from
          <a
            href="https://www.kluniversity.in/"
            className="ms-2 btn-outline-dark btn btn-sm"
          >
            KL University
          </a>
        </p>
        <p>
          <FontAwesomeIcon icon={faPeopleArrows} color="black" /> Looking to
          collaborate for Dev{" "}
          <a href="/#projects" className="ms-2 btn-outline-dark btn btn-sm">
            Projects
          </a>
        </p>
        <p>
          <FontAwesomeIcon icon={faBriefcase} color="black" /> Looking for a job
          as a Software Developer / IT Support Engineer.
        </p>
        <p>
          <FontAwesomeIcon icon={faPersonCircleQuestion} color="black" /> Ask me
          about anything, Except Maths
        </p>
        <p>
          <FontAwesomeIcon icon={faHeadset} color="black" /> I spend a good
          amount of my time playing
          <a href="/#gaming" className="ms-2 btn-outline-dark btn btn-sm">
            Games
          </a>
        </p>
        <p>
          <FontAwesomeIcon icon={faHandSparkles} color="black" /> Life Hack:
          Save time by using hotkeys in your workflow
        </p>
      </div>
    </section>
  );
}
