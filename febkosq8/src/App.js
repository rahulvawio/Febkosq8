import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHandPeace, faAddressCard } from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <div className="App">
      <nav id="navbar-example2" class="navbar bg-light px-3 mb-3">
        <a class="navbar-brand" href="#">
          Febkosq8
        </a>
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a class="nav-link" href="#aboutMe">
              About Me
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#Technologies">
            Technologies and Tools
            </a>
          </li>
        </ul>
      </nav>
      <header className="Febkosq8-header">
        <h1 align="center">
          Hello <FontAwesomeIcon icon={faHandPeace} color="yellow" /> I'm Febin
          Koshy Philip
        </h1>
        <section align="left" className="px-2" id="aboutMe">
          <h3 align="center">
            About Me <FontAwesomeIcon icon={faAddressCard} color="black" />
          </h3>
          <p>I blog random tech stuff at febkosq8.me</p>
          <p>I’m currently working on GStat Tracker.</p>
          <p>I’m currently learning Master's in Advanced Computer Science</p>
          <p> I’m looking to collaborate for Dev Projects</p>
          <p>I’m looking for a job as a Software Developer.</p>
          <p> Ask me about anything, Except Maths</p>
          <p>Life Hack: Save time by using hotkeys in your workflow</p>
          <p>Fun fact: I spend a good amount of my time playing games</p>
        </section>
        <section align="left" className="px-2" id="Technologies">
          <h3 align="center">
            Technologies and Tools I use{" "}
            <FontAwesomeIcon icon={faAddressCard} color="black" />
          </h3>
          <img
            src="https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white"
            alt="C++"
            title="C++"
          />{" "}
          <img
            src="https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white"
            alt="C++"
            title="C++"
          />{" "}
          Since 2017
        </section>
      </header>
    </div>
  );
}

export default App;
