import React from "react";
import gst from "../assets/GStatTracker.jpeg";
import cgif from "../assets/CryptoGIF.png";
import jcm from "../assets/jcm.png";
import jdb from "../assets/jdb.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
export default function Projects() {
  const projectItems = [
    {
      imgSrc: jdb,
      title: "Jappan Discord Bot",
      gitUrl: "https://github.com/febkosq8/Jappan_Discord_Bot",
      appUrl:
        "https://discord.com/api/oauth2/authorize?client_id=732230135671029831&permissions=8&scope=applications.commands%20bot",
    },
    {
      imgSrc: gst,
      title: "G Stat Tracker",
      gitUrl: "https://github.com/febkosq8/GStatTracker",
      appUrl: "https://gstattracker.tk",
    },
    {
      imgSrc: cgif,
      title: "CryptoGIF",
      gitUrl: "https://github.com/febkosq8/CryptoGIF",
      appUrl: "",
    },
    {
      imgSrc: jcm,
      title: "Java Cryptographic Messenger",
      gitUrl: "https://github.com/febkosq8/java_cryptographic_messenger",
      appUrl: "",
    },
  ];
  return (
    <section align="left" className="section px-2 row" id="projects">
      <h2 className="display-1" align="center">
        Projects <FontAwesomeIcon icon={faListCheck} color="black" />
      </h2>
      {projectItems.map((item) => {
        return (
          <div className="projectItem col-6">
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
