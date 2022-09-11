import React, { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHandPeace, faAddressCard } from "@fortawesome/free-solid-svg-icons";
export default function Intro() {
  return (
    <section className="px-2" id="Intro">
      <div className="Intro">
        <h1 className="display-1" align="center">
          Hello <FontAwesomeIcon icon={faHandPeace} color="yellow" /> I'm Febin
          Koshy Philip
        </h1>
      </div>
    </section>
  );
}
