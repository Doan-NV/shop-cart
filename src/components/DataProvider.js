import React, { useState, useContext, useEffect } from "react";
import { Alert } from "reactstrap";
import { data } from "../data";

export const DataContext = React.createContext();

const DataProvider = (props) => {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);

  const addCart = (id) => {
    const check = cart.every((item) => {
      return item.id !== id;
    });
    console.log(check);
    if (check) {
      const data = products.filter((item) => {
        return item.id === id;
      });
      setCart([...cart, ...data]);
    } else {
      alert("this product has been added!");
    }
  };

  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart) setCart(dataCart);
  }, []);
  useEffect(() => {
    localStorage.setItem("dataCart", JSON.stringify(cart));
  }, [cart]);

  const value = {
    products: [products, setProducts],
    cart: [cart, setCart],
    addCart: addCart,
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};

export default DataProvider;
