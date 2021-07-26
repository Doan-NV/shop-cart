import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FaCartPlus } from "react-icons/fa";

import { DataContext } from "./DataProvider";
const Navbar = (props) => {
  const { isToggle, handleToggle } = props;
  const [cart] = useContext(DataContext).cart;
  return (
    <header className="">
      <div className="logo">
        <h1>
          <Link to="/">Shopping</Link>
        </h1>
      </div>
      <div
        className="menu"
        style={{
          top: `${isToggle === false ? "-100px" : "5px"}`,
          position: "absolute",
          // top: "5px",
          right: "20px",
          fontSize: "50px",
          cursor: "pointer",
        }}
      >
        <FiMenu onClick={handleToggle} />
      </div>
      <ul className="links">
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Contacts</Link>
        </li>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <div className="cart-icon">
            <Link to="/cart">
              <FaCartPlus />
              <span>{cart.length}</span>
            </Link>
          </div>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
