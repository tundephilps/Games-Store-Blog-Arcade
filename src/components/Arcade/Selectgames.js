import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Arcade.scss";
import hangman from "../../images/hangman.jpg";

import Mega from "../../images/megaman.webp";
import candy from "../../images/candy.png";

const Selectgames = (props) => {
  const [active, setActive] = useState("FirstGame");
  return (
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
  );
};

export default Selectgames;
