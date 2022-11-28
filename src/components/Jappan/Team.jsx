import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
export default function Team() {
  return (
    <section align="left" className="section px-2" id="Team">
      <h2 className="display-1" align="center">
        <FontAwesomeIcon icon={faTerminal} color="black" /> Team{" "}
        <FontAwesomeIcon icon={faPeopleGroup} color="black" />
      </h2>
    </section>
  );
}
