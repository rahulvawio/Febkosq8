import React from "react";
export default function Header() {
  return (
    <div className="header">
      <nav id="navbar-jappan" className="navbar fixed-top bg-light py-2">
        <a className="navbar-brand px-2" href="/">
          Febkosq8 - Jappan
        </a>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" href="#About">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Features">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Team">
              Team
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
