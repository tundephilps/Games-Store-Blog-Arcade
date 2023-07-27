import React from "react";
import "./LeaderBoard.scss";

const LeaderBoard = () => {
  return (
    <div
      class="leaderboard"
      style={{
        width: "25rem",
        margin: "5rem auto",
        borderRadius: "1rem",
        boxShadow: "2px 2px 16px 1px #aaa",
        fontFamily: "sans-serif",
        height: "100%",
      }}
    >
      <div
        style={{
          backgroundColor: "#ff7500",
          color: "white",
          textTransform: "uppercase",
          borderTopLeftRadius: "1rem",
          borderTopRightRadius: "1rem",
          height: "14rem",
          position: "relative",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            lineHeight: "3rem",
            position: "absolute",
            marginLeft: "3rem",
            top: "4rem",
          }}
        >
          Leader Board
        </h1>
        <img
          src="https://i.imgur.com/xUSrEpd.png"
          alt=""
          style={{
            height: "16rem",
            position: "absolute",
            bottom: "0",
            right: "1rem",
          }}
        />
        <nav
          style={{
            width: "100%",
            position: "absolute",
            bottom: "0",
            fontSize: "0.9rem",

            display: "flex",
            gap: "2rem",
            justifyContent: "center",
            fontSize: "12px",

            background:
              "linear-gradient(to bottom, transparent, transparent 10%, rgba(22, 22, 22, 0.5))",
          }}
        >
          <a
            href=""
            class="active"
            style={{
              textDecoration: "none",
              color: "inherit",

              paddingTop: "1rem",
              paddingBottom: "0.75rem",
              display: "inline-block",
              fontWeight: "bold",
              borderBottom: "4px solid #f0a900",
            }}
          >
            Solo
          </a>
          <a
            href=""
            class="active"
            style={{
              textDecoration: "none",
              color: "inherit",
              paddingTop: "1rem",
              paddingBottom: "0.75rem",
              display: "inline-block",
              fontWeight: "bold",
            }}
          >
            Duo
          </a>
          <a
            href=""
            class="active"
            style={{
              textDecoration: "none",
              color: "inherit",
              paddingTop: "1rem",
              paddingBottom: "0.75rem",
              display: "inline-block",
              fontWeight: "bold",
            }}
          >
            MultiPlayer
          </a>
        </nav>
      </div>
      <table
        style={{
          backgroundColor: "#16181e",
          color: "#999",
          width: "100%",
          borderCollapse: "collapse",
          borderBottomLeftRadius: "1rem",
          borderBottomRightRadius: "1rem",
          overflow: "hidden",
        }}
      >
        <thead
          style={{
            fontSize: "1rem",
            color: "#555",
            textTransform: "uppercase",
          }}
        >
          <tr style={{ paddingTop: "10px" }}>
            <th class="rank"></th>
            <th class="nick">Nickname</th>
            <th class="sp">SP</th>
            <th class="kd">K/D</th>
          </tr>
        </thead>
        <tbody
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: "0.9rem",
          }}
        >
          <tr>
            <td class="rank">1</td>
            <td class="nick">Sc0utOP</td>
            <td class="sp">6.308</td>
            <td class="kd">4.8</td>
          </tr>
          <tr>
            <td class="rank">2</td>
            <td class="nick">MortaL</td>
            <td class="sp">6.301</td>
            <td class="kd">4.5</td>
          </tr>
          <tr>
            <td class="rank">4</td>
            <td class="nick">CarryMinati</td>
            <td class="sp">5.108</td>
            <td class="kd">2.1</td>
          </tr>
          <tr>
            <td class="rank">5</td>
            <td class="nick">CarryMinati</td>
            <td class="sp">5.108</td>
            <td class="kd">2.1</td>
          </tr>
          <tr>
            <td class="rank">6</td>
            <td class="nick">CarryMinati</td>
            <td class="sp">5.108</td>
            <td class="kd">2.1</td>
          </tr>
          <tr>
            <td class="rank">7</td>
            <td class="nick">CarryMinati</td>
            <td class="sp">5.108</td>
            <td class="kd">2.1</td>
          </tr>
          <tr>
            <td class="rank">8</td>
            <td class="nick">CarryMinati</td>
            <td class="sp">5.108</td>
            <td class="kd">2.1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LeaderBoard;
