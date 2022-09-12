import React, { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHandPeace, faAddressCard } from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  return (
    <div className="header">
      <nav id="navbar-febkosq8" className="navbar fixed-top bg-light py-2">
        <a className="navbar-brand px-2" href="/">
          Febkosq8
        </a>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" href="#Intro">
              Intro
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#AboutMe">
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Languages">
              Languages & Frameworks
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Services">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Platforms">
              Platforms
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Projects">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Gaming">
              Gaming
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Socials">
              Socials
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
