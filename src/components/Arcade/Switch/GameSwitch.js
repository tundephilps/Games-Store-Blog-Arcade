import React, { useState } from "react";
import "./Switch.scss";

const GameSwitch = (props) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className="checkbox">
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <div>
        <div className="switch">
          <div className="line"></div>
          <span className="on">ON</span>
        </div>
        <div className="shadow"></div>
        <div className="light"></div>
      </div>
    </div>
  );
};

export default GameSwitch;
