import React from "react";
import { Link } from "react-router-dom";
import "./Arcade.scss";

const Categories = ({ onStartCandy, candycrush }) => {
  const games = [
    {
      cateImg: "../images/tetris.png",
      cateName: "Tetris",
      game: { onStartCandy },
    },
    {
      cateImg: "../images/snake.jpg",
      cateName: "Snake and Ladder",
    },
    {
      cateImg: "../images/memory.webp",
      cateName: "Memory Cards",
    },
    {
      cateImg: "../images/megaman.webp",
      cateName: "Mega Man",
    },
    {
      cateImg: "../images/casino.png",
      cateName: "Casino",
    },
    {
      cateImg: "../images/breakout.png",
      cateName: "Break Out",
    },

    {
      cateImg: "../images/candy.png",
      cateName: "Candy Crush",
      link: "./CandyCrush",
    },

    {
      cateImg: "../images/hangman.jpg",
      cateName: "Hang Man",
      game: { candycrush },
    },
  ];

  return (
    <>
      <div className="category">
        {games.map((value, index) => {
          return (
            <Link to={`/games/${index}/${value}`}>
              <div
                className="box f_flex"
                key={index}
                onClick={value.game}
                //   onStartClick={() => setMode("candycrush")}
              >
                <img src={value.cateImg} alt="" />
                <span>{value.cateName}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
