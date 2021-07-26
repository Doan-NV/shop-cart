import React from "react";
import "../styles/colorDetail.css";
const SizeDetail = (props) => {
  const { sizes } = props;
  return (
    <div className="sizes">
      {sizes.map((size, index) => {
        return <button key={index}>{size}</button>;
      })}
    </div>
  );
};

export default SizeDetail;
