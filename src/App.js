import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Languages from "./components/Languages";
import Services from "./components/Services";
import Platforms from "./components/Platforms";
import Projects from "./components/Projects";
import Gaming from "./components/Gaming";
import Socials from "./components/Socials";
import React, { useEffect } from "react";
function App() {
  useEffect(() => {
    document.title = "Febkosq8";
  });
  return (
    <div
      className="App pt-4"
      data-bs-spy="scroll"
      data-bs-target="#navbar-febkosq8"
      data-bs-root-margin="0px 0px -40%"
      data-bs-smooth-scroll="true"
      tabindex="0"
    >
      <div className="header">
        <Header />
      </div>

      <div className="body">
        <Intro />
        <About />
        <Languages />
        <Services />
        <Platforms />
        <Projects />
        <Gaming />
        <Socials />
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
