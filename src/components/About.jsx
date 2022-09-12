import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHandPeace, faAddressCard } from "@fortawesome/free-solid-svg-icons";
export default function About() {
  return (
    <section align="left" className="Section px-2" id="AboutMe">
      <h2 className="display-1" align="center">
        About Me <FontAwesomeIcon icon={faAddressCard} color="black" />
      </h2>
      <p>I blog random tech stuff at febkosq8.tk</p>
      <p>I’m currently working on GStat Tracker.</p>
      <p>I’m currently learning Master's in Advanced Computer Science</p>
      <p> I’m looking to collaborate for Dev Projects</p>
      <p>I’m looking for a job as a Software Developer.</p>
      <p> Ask me about anything, Except Maths</p>
      <p>Life Hack: Save time by using hotkeys in your workflow</p>
      <p>Fun fact: I spend a good amount of my time playing games</p>
    </section>
  );
}
