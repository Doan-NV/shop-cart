import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "./DataProvider";

import "../styles/cart.css";

import ColorDetail from "./ColorDetail";
import SizeDetail from "./SizeDetail";
import { Button } from "reactstrap";
import ThumbDetail from "./ThumbDetail";
export const Cart = () => {
  const [cart, setCart] = useContext(DataContext).cart;
  const [total, setTotal] = useState(0);

  const removeItem = (e) => {
    let id = e.target.value;
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };
  const setBackground = (e) => {
    let id = parseInt(e.target.id);
    let idProducts = parseInt(e.target.name);
    console.log(id);
    console.log(idProducts);
    cart.forEach((item, index) => {
      if (idProducts == index) {
        item.current = id;
      }
    });
    setCart([...cart]);
    // console.log(cart);
  };
  const decrement = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.count -= 1;
        if (item.count < 0) {
          item.count = 0;
        }
      }
    });
    setCart([...cart]);
    console.log(cart);
  };
  const increment = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.count += 1;
      }
    });
    setCart([...cart]);
  };

  useEffect(() => {
    const getTotal = () => {
      const newTotal = cart.reduce((pre, item) => {
        return pre + item.count * item.price;
      }, 0);
      setTotal(newTotal);
    };
    getTotal();
  }, [cart]);
  return (
    <>
      {cart.map((item, index) => {
        return (
          <div className="cart" key={index}>
            <div
              className="img-container"
              style={{ backgroundImage: `url(${item.images[item.current]})` }}
            ></div>
            <div className="box-cart">
              <Button
                className="delete"
                color="danger"
                value={item.id}
                onClick={(e) => {
                  removeItem(e);
                }}
              >
                Delete
              </Button>
              <h2 title={item.title}> {item.title}</h2>
              <h3>${item.count * item.price}</h3>
              <ColorDetail colors={item.colors} />
              <SizeDetail sizes={item.sizes} />
              <p>{item.description}</p>
              <ThumbDetail
                images={item.images}
                setStt={setBackground}
                keyname={index}
              />
              <div className="count">
                <Button
                  onClick={() => {
                    decrement(item.id);
                  }}
                >
                  -
                </Button>
                <span>{item.count}</span>
                <Button
                  onClick={() => {
                    increment(item.id);
                  }}
                >
                  +
                </Button>
              </div>
            </div>
            <hr></hr>
          </div>
        );
      })}
      <h4>Payment: ${total}</h4>
    </>
  );
};
