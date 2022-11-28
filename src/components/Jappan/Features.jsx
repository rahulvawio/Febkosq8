import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLayerGroup,
  faMusic,
  faPersonArrowUpFromLine,
  faGavel,
} from "@fortawesome/free-solid-svg-icons";
export default function Features() {
  return (
    <section align="left" className="section px-2" id="Features">
      <h2 className="display-1" align="center">
        Features <FontAwesomeIcon icon={faLayerGroup} color="black" />
      </h2>

      <h4>
        <FontAwesomeIcon icon={faMusic} color="black" /> Music Playback
        <br />
        <FontAwesomeIcon icon={faPersonArrowUpFromLine} color="black" />{" "}
        Leveling System
        <br />
        <FontAwesomeIcon icon={faGavel} color="black" /> Moderation Tools
      </h4>
    </section>
  );
}
