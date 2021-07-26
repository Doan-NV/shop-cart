import React from "react";
import shopping from "../images/shopping.svg";
import { Button } from "reactstrap";
import { AiOutlineArrowRight } from "react-icons/ai";
import "../styles/section.css";
import { Link } from "react-router-dom";
const Section = () => {
  console.log(shopping);
  return (
    <div className="container home-section">
      <div className="title-section">
        <h1>well come to shop</h1>
        <h4>Go to the shop now!</h4>
        <Button outline color="secondary">
          <Link to="/products">
            Shopping
            <AiOutlineArrowRight />
          </Link>
        </Button>
      </div>
      <div className="img-section">
        <img src={shopping} alt=""></img>
      </div>
    </div>
  );
};

export default Section;
