import React, { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHandPeace, faAddressCard } from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  useEffect(() => {
    document.title = "Febkosq8";
  });
  return (
    <div className="header">
      <nav id="navbar-febkosq8" className="navbar fixed-top bg-light py-2">
        <a class="navbar-brand px-2" href="/">
          Febkosq8
        </a>
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a class="nav-link" href="#Intro">
              Intro
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#AboutMe">
              About Me
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#Languages">
              Languages & Frameworks
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#Services">
              Services
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#Platforms">
              Platforms
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#Projects">
              Projects
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#Gaming">
              Gaming
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#Socials">
              Socials
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
