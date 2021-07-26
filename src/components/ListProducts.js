import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { DataContext } from "./DataProvider";

import "../styles/listProduct.css";
const ListProducts = () => {
  const [products] = useContext(DataContext).products;
  const addCart = useContext(DataContext).addCart;
  return (
    <>
      {products.map((item) => {
        return (
          <div className="card" key={item.id}>
            <Link to={`/addtocart/${item.id}`}>
              <img src={item.images[0]} alt="hehe" />
            </Link>
            <div className="box">
              <h3 title={item.title}>
                <Link to={`/addtocart/${item.id}`}>{item.title}</Link>
              </h3>
              <p>{item.description}</p>
              <h4>${item.price}</h4>
              <Button
                color="secondary"
                onClick={() => {
                  addCart(item.id);
                }}
              >
                Add to cart
              </Button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ListProducts;
