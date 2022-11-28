import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faRobot } from "@fortawesome/free-solid-svg-icons";
export default function About() {
  return (
    <section align="left" className="section px-2" id="About">
      <h2 className="display-1" align="center">
        About Jappan <FontAwesomeIcon icon={faRobot} color="black" />
      </h2>
      <p>A simple discord bot made to make someone's life easier</p>
      <p>
        Currently features Music Playback, Leveling System & Moderation Tools
      </p>
      <p>Built using Discord.js v14, Node.js and hosted on Heroku.</p>
    </section>
  );
}
