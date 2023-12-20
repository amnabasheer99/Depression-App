import { useState } from "react";
import reactLogo from "./assets/react.svg";
import landingImage from "./assets/landingPage.jpg";

function App() {
  return (
    <>
      <html>
        <body>
          <nav
            className="navbar navbar-expand-lg  menu shadow fixed-top"
            id="nau"
          >
            <div className="container">
              <a className="navbar-brand " href="#">
                <img src="" alt="logo" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarNav"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="">
                      <button className="custom-btn btn-11">Login</button>
                    </a>
                  </li>
                </ul>
                {/* <button type="button" className="rounded-pill btn-rounded">
              vaceyra@gmail.com
              <span>
                <i className="fa-regular fa-envelope"></i>
              </span>
            </button> */}
              </div>
            </div>
          </nav>

          <section id="landingSection" style={{ marginTop: "0px" }}>
            <div className="container">
              <div className="row vh-100 justify-content-center align-items-center">
                <div className="col-md-12 text-left">
                  <h3 id="landingSubHeading">Welcome to EmoAssist</h3>
                  <h1 id="landingHeading">Break free into yourself</h1>
                  <br />
                  <a id="getStarted" href="">
                    Get Started Now{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="14"
                      viewBox="0 0 448 513"
                      color="white"
                    >
                      <path
                        d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </body>
      </html>
    </>
  );
}

export default App;
