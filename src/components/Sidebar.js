import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { DataContext } from "./DataProvider";
import "../styles/sidebar.css";
import { FaCartPlus } from "react-icons/fa";
const Sidebar = (props) => {
  const { isToggle, handleToggle } = props;
  const [cart] = useContext(DataContext).cart;
  console.log(props);
  return (
    <div
      onClick={handleToggle}
      className="sideBar"
      style={{
        opacity: `${isToggle === false ? "1" : "0"}`,
        display: `${isToggle === false ? "" : "none"}`,
      }}
    >
      <ul className="side-links">
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
          <div className="side-cart">
            <Link to="/cart">
              <FaCartPlus />
              <span>{cart.length}</span>
            </Link>
          </div>
        </li>
        <li>
          <div className="side-close">
            <GrClose />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
