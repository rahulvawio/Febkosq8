import React from "react";
import gstImage from "../../assets/GStatTracker.jpeg";
import cryptoGifImage from "../../assets/CryptoGIF.png";
import javaCryptoMessengerImage from "../../assets/jcm.png";
import jappanImage from "../../assets/jdb.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
export default function Projects() {
  const projectItems = [
    {
      imgSrc: jappanImage,
      title: "Jappan - Discord Bot",
      btn1Url: "https://github.com/febkosq8/Jappan_Discord_Bot",
      btnName1: (
        <>
          View on
          <FontAwesomeIcon className="ms-2" icon={faGithub} /> GitHub
        </>
      ),
      btnName2: "Invite Bot",
      bt2Url:
        "https://discord.com/api/oauth2/authorize?client_id=732230135671029831&permissions=8&scope=applications.commands%20bot",
    },
    {
      imgSrc: gstImage,
      title: "GStat Tracker",
      btn1Url: "https://github.com/febkosq8/GStatTracker",
      btnName1: (
        <>
          View on
          <FontAwesomeIcon className="ms-2" icon={faGithub} /> GitHub
        </>
      ),
      btnName2: "View Live Application",
      bt2Url: "https://gstattracker.tk",
    },
    {
      imgSrc: cryptoGifImage,
      title: "CryptoGIF",
      btn1Url: "https://github.com/febkosq8/CryptoGIF",
      btnName1: (
        <>
          View on
          <FontAwesomeIcon className="ms-2" icon={faGithub} /> GitHub
        </>
      ),
      btnName2: "View Live Application",
      bt2Url: "",
    },
    {
      imgSrc: javaCryptoMessengerImage,
      title: "Java Cryptographic Messenger",
      btn1Url: "https://github.com/febkosq8/java_cryptographic_messenger",
      btnName1: (
        <>
          View on
          <FontAwesomeIcon className="ms-2" icon={faGithub} /> GitHub
        </>
      ),
      btnName2: "View Live Application",
      bt2Url: "",
    },
  ];
  return (
    <section
      align="left"
      className="section d-flex flex-column w-100"
      id="projects"
      style={{ paddingTop: "40px" }}
    >
      <h2 className="display-1" align="center">
        Projects <FontAwesomeIcon icon={faListCheck} color="black" />
      </h2>
      <div className="d-flex flex-row flex-wrap align-items-center justify-content-center w-100">
        {projectItems.map((item) => {
          return (
            <div className="card m-1 p-2 b-3 d-flex flex-column align-items-center justify-content-center col-4">
              <img
                src={item.imgSrc}
                className="card-img-top"
                style={{
                  width: "45vh",
                  aspectRatio: 1.78,
                }}
                alt={item.title}
              />
              <div className="d-flex flex-column align-items-center card-body">
                <p className="card-title">{item.title}</p>
                <div
                  className=" gap-2 d-flex flex-row"
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  {item.btn1Url !== "" ? (
                    <a href={item.btn1Url} className="btn-outline-dark btn">
                      {item.btnName1}
                    </a>
                  ) : (
                    <></>
                  )}
                  {item.bt2Url !== "" ? (
                    <a href={item.bt2Url} className="btn-outline-dark btn">
                      {item.btnName2}
                    </a>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
