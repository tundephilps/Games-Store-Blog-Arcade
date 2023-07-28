import React, { useState } from "react";
import Categories from "../../components/Arcade/Categories";
import "./Arcade.scss";
import SliderHome from "../../components/Arcade/Slider";
import "../../components/Arcade/Switch/Switch.scss";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import FormControlLabel from "@mui/material/FormControlLabel";
import Arena from "../../components/Arcade/Arena/Arena";
import Selectgames from "../../components/Arcade/Selectgames";

import "./Arcade.scss";
import hangman from "../../images/hangman.jpg";

import Mega from "../../images/megaman.webp";
import candy from "../../images/candy.png";
import LeaderBoard from "../../components/Arcade/LeaderBoard/LeaderBoard";

const Arcade = (props) => {
  const [checked, setChecked] = React.useState(false);

  const [active, setActive] = useState("FirstGame");

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const arena = (
    <div style={{ marginTop: "4rem" }}>
      <Arena />
    </div>
  );

  return (
    <>
      <section className="home" id="Game">
        <div className="container d_flex">
          <LeaderBoard />
          <SliderHome />
        </div>
      </section>
      <section
        style={{
          backgroundColor: "hsl(250, 11%, 11%)",
          gap: "5rem",
          minWidth: "100%",
          height: "90vh",
        }}
      >
        <Box sx={{ height: 180, minWidth: "1000px" }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <FormControlLabel
              control={
                <div className="checkbox">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={handleChange}
                  />
                  <div>
                    <div className="switch">
                      <div className="line"></div>
                      <span className="on">ON</span>
                    </div>
                    <div className="shadow"></div>
                    <div className="light"></div>
                  </div>
                </div>
              }
              label="Show"
            />

            <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
              {arena}
            </Slide>
          </Box>
        </Box>
      </section>
    </>
  );
};

export default Arcade;

/**    <GameSwitch
                  sx={
                    {
                      // position: "absolute",
                      // top: "123%",
                      // left: "50%",
                      // zIndex: "99",
                      //   opacity: -9,
                    }
                  }
                  checked={checked}
                  onChange={handleChange}
                /> */
