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
      img: [
        {
          img: MusicPlay1,
          title: "Play your favourite playlist",
          width: "20vw",
          ratio: "auto",
        },
      ],
    },
    {
      title: " Leveling System",
      icon: <FontAwesomeIcon className="ms-2" icon={faPersonArrowUpFromLine} />,
      img: [
        {
          img: Level1,
          title: "Know who all are active in a server",
          ratio: "auto",
          width: "20vw",
        },
        {
          img: Level2,
          title: "Leveling up as you interact",
          width: "20vw",
          ratio: "auto",
        },
      ],
    },
    {
      title: " Moderation Tools",
      icon: <FontAwesomeIcon className="ms-2" icon={faGavel} />,
      img: [
        {
          img: Mod1,
          title: "Audit Events",
          ratio: "auto",
          width: "20vw",
        },
        {
          img: Mod2,
          title: "Clear Messages",
          width: "20vw",
          ratio: "auto",
        },
        {
          img: Mod3,
          title: "Member I-O Announcements",
          width: "20vw",
          ratio: "auto",
        },
      ],
    },
  ];
  return (
    <section align="left" className="section px-2">
      <h2 className="display-1" align="center" id="features">
        Features <FontAwesomeIcon icon={faLayerGroup} color="black" />
      </h2>

      {featureItems.map((item) => {
        return (
          <div className="card text-bg-dark m-1 p-2 d-flex flex-column align-items-center justify-content-center col-md-6 col-sm-8">
            <h3 className="card-title">
              {item.icon}
              {item.title}
            </h3>
            <div className="d-flex flex-column align-items-center card-body">
              <div className="gap-2 d-flex flex-row flex-wrap align-items-center justify-content-center">
                {item.img.map((img, index) => (
                  <div
                    className={`d-flex flex-row align-items-center w-100 justify-content-between ${
                      index !== item.img.length - 1 && "border-bottom"
                    }  py-4`}
                  >
                    <h5 className="fw-light">{img.title}</h5>
                    <img
                      src={img.img}
                      className="card-img-top"
                      style={{
                        width: img.width,
                        aspectRatio: img.ratio,
                      }}
                      alt={img.title}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
