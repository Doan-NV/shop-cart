import React from "react";
import "../styles/colorDetail.css";
const ColorDetail = (props) => {
  const { colors } = props;
  return (
    <div className="colors">
      {colors.map((color, index) => {
        return (
          <button key={index} style={{ backgroundColor: `${color}` }}>
            {color}
          </button>
        );
      })}
    </div>
  );
};

export default ColorDetail;
