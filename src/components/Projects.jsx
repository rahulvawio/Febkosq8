import React from "react";
import gst from "../assets/GStatTracker.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
export default function Projects() {
  const projectItems = [
    {
      imgSrc: gst,
      title: "G Stat Tracker",
      gitUrl: "https://github.com/febkosq8/GStatTracker",
      appUrl: "https://gstattracker.tk",
    },
    {
      imgSrc: gst,
      title: "Test",
      gitUrl: "https://github.com/febkosq8",
      appUrl: "",
    },
  ];
  return (
    <section align="left" className="section px-2" id="Projects">
      <h2 className="display-1" align="center">
        Projects <FontAwesomeIcon icon={faListCheck} color="black" />
      </h2>
      {projectItems.map((item) => {
        return (
          <div className="projectItem">
            <img
              src={item.imgSrc}
              class="projectImage rounded float-start"
              alt={item.title}
            />
            <p className="projectTitle">{item.title}</p>
            <div className="projectButton">
              <a href={item.gitUrl} className="ms-2 btn-outline-dark btn">
                View on <FontAwesomeIcon icon={faGithub} /> GitHub
              </a>
              {item.appUrl !== "" ? (
                <a href={item.appUrl} className="ms-2 btn-outline-dark btn">
                  View Live Application
                </a>
              ) : (
                <></>
              )}
              {}
            </div>
          </div>
        );
      })}
    </section>
  );
}
