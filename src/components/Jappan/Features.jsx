import React from "react";

import MusicPlay1 from "../../assets/Jappan/MusicPlay1.png";
import Level1 from "../../assets/Jappan/Level1.png";
import Level2 from "../../assets/Jappan/Level2.png";
import Mod1 from "../../assets/Jappan/Mod1.png";
import Mod2 from "../../assets/Jappan/Mod2.png";
import Mod3 from "../../assets/Jappan/Mod3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLayerGroup,
  faMusic,
  faPersonArrowUpFromLine,
  faGavel,
} from "@fortawesome/free-solid-svg-icons";
export default function Features() {
  const featureItems = [
    {
      title: " Music Playback",
      icon: <FontAwesomeIcon className="ms-2" icon={faMusic} />,
      img1: MusicPlay1,
      img1Title: "Play your favourite playlist",
      img1Width: "30vh",
      img1Ratio: 2.3,
      img2: "",
      img2Title: "",
      img2Width: "30vh",
      img2Ratio: 2.3,
      img3: "",
      img3Title: "",
      img3Width: "30vh",
      img3Ratio: 2.3,
    },
    {
      title: " Leveling System",
      icon: <FontAwesomeIcon className="ms-2" icon={faPersonArrowUpFromLine} />,
      img1: Level1,
      img1Title: "Know who all are active in a server",
      img1Width: "35vh",
      img1Ratio: 1,
      img2: Level2,
      img2Title: "Leveling up as you interact",
      img2Width: "30vh",
      img2Ratio: 2.3,
      img3: "",
      img3Title: "",
      img3Width: "30vh",
      img3Ratio: 2.3,
    },
    {
      title: " Moderation Tools",
      icon: <FontAwesomeIcon className="ms-2" icon={faGavel} />,
      img1: Mod1,
      img1Title: "Audit Events",
      img1Width: "30vh",
      img1Ratio: 2.3,
      img2: Mod2,
      img2Title: "Clear Messages",
      img2Width: "30vh",
      img2Ratio: 2.3,
      img3: Mod3,
      img3Title: "Member I-O Announcements",
      img3Width: "30vh",
      img3Ratio: 2.3,
    },
  ];
  return (
    <section align="left" className="section px-2">
      <h2 className="display-1" align="center" id="features">
        Features <FontAwesomeIcon icon={faLayerGroup} color="black" />
      </h2>

      {featureItems.map((item) => {
        return (
          <div className="card m-1 p-2 b-3 d-flex flex-column align-items-center justify-content-center col-8">
            <div className="d-flex flex-column align-items-center card-body">
              <p className="card-title">
                {item.icon}
                {item.title}
              </p>
              <div
                className=" gap-2 d-flex flex-row"
                style={{ alignItems: "center", justifyContent: "center" }}
              >
                {item.img1 !== "" ? (
                  <figure>
                    <img
                      src={item.img1}
                      className="card-img-top"
                      style={{
                        width: item.img1Width,
                        aspectRatio: item.img1Ratio,
                      }}
                      alt={item.img1Title}
                    />
                    <figcaption>{item.img1Title}</figcaption>
                  </figure>
                ) : (
                  <></>
                )}
                {item.img2 !== "" ? (
                  <figure>
                    <img
                      src={item.img2}
                      className="card-img-top"
                      style={{
                        width: item.img2Width,
                        aspectRatio: item.img2Ratio,
                      }}
                      alt={item.img2Title}
                    />
                    <figcaption>{item.img2Title}</figcaption>
                  </figure>
                ) : (
                  <></>
                )}
                {item.img3 !== "" ? (
                  <figure>
                    <img
                      src={item.img3}
                      className="card-img-top"
                      style={{
                        width: item.img3Width,
                        aspectRatio: item.img3Ratio,
                      }}
                      alt={item.img3Title}
                    />
                    <figcaption>{item.img3Title}</figcaption>
                  </figure>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
