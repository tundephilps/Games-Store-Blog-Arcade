import { Slide, Zoom } from "@mui/material";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import CandyCrush from "./CandyCrush/CandyCrush";
import "./Monitor.scss";
import { Rockman } from "./RockMan/components";

import hangman from "../../../images/hangman.jpg";

import Mega from "../../../images/megaman.webp";
import candy from "../../../images/candy.png";

const games = (
  <div>
    <h1 style={{ color: "white", fontSize: "10rem" }}>HELLO</h1>
  </div>
);

const Games = (props) => {
  const [active, setActive] = useState("FirstGame");

  return (
    <div style={{ display: "flex" }}>
      <div className="category">
        <div className="box f_flex">
          <img src={hangman} alt="" />
          <span>Hang Man</span>
        </div>
        <div className="box f_flex">
          <img src={candy} alt="" />
          <button onClick={() => setActive("SecondGame")}>
            {" "}
            <span>Candy Crush</span>
          </button>
        </div>{" "}
        <div className="box f_flex">
          <img src={Mega} alt="" />

          <button onClick={() => setActive("ThirdGame")}>
            <span>Mega Man</span>
          </button>
        </div>
      </div>

      <div
        class="desktop-monitor"
        data-aos="fade-zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <div class="desktop-screen">
          <div>
            <div
              style={{
                minHeight: "30rem",
                width: "100rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {active === "FirstGame" && (
                <h3>Select a Game in the Nav to Start</h3>
              )}

              {active === "SecondGame" && (
                <CandyCrush game="2" active={active} setActive={setActive} />
              )}

              {active === "ThirdGame" && (
                <Rockman game="3" active={active} setActive={setActive} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
