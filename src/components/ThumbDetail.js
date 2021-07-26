import React from "react";

const ThumbDetail = (props) => {
  const { images, setStt, keyname } = props;
  return (
    <div className="thumb">
      {images.map((img, index) => {
        return (
          <img
            id={index}
            key={index}
            name={keyname}
            src={img}
            alt=""
            onClick={(e) => {
              setStt(e);
            }}
          ></img>
        );
      })}
    </div>
  );
};

export default ThumbDetail;
