import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "./DataProvider";

import "../styles/details.css";
import ColorDetail from "./ColorDetail";
import SizeDetail from "./SizeDetail";
import ThumbDetail from "./ThumbDetail";
const Details = () => {
  const { id } = useParams();
  const [products] = useContext(DataContext).products;
  const addCart = useContext(DataContext).addCart;
  const detail = products.filter((item) => {
    return item.id === id;
  });
  const [stt, setStt] = useState(0);
  const [product] = detail;
  return (
    <div className="details">
      <div
        className="img-container"
        style={{ backgroundImage: `url(${product.images[stt]})` }}
      ></div>
      <div className="box-details">
        <h2 title={product.title}> {product.title}</h2>
        <h3>${product.price}</h3>
        <ColorDetail colors={product.colors} />
        <SizeDetail sizes={product.sizes} />
        <p>{product.description}</p>
        <p>{product.content}</p>
        <ThumbDetail images={product.images} setStt={setStt} />
        <button
          className="cart"
          onClick={() => {
            addCart(id);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Details;
