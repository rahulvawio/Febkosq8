import "./Jappan.css";
import React from "react";
import Header from "../../components/Jappan/Header";
import About from "../../components/Jappan/About";
import Features from "../../components/Jappan/Features";
import Team from "../../components/Jappan/Team";
import jappanFavicon from "../../assets/Jappan/jappanFavicon.ico";
const Jappan = () => {
  document.title = "Jappan | Discord Bot";

  return (
    <div className="App pt-4">
      <Header />

      <div
        className="body-container"
        data-bs-spy="scroll"
        data-bs-target="#navbar-Jappan"
        data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
        tabIndex="0"
      >
        <About />
        <Features />
        <Team />
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default Jappan;
