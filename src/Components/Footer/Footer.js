import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="f-container flexCenter paddings innerWidth">
        <div className="flexColStart f-left">
          <img src="./images/logo2.png" width={120} alt="logo2" />
          <span className="secondaryText">
            Our vision is to make all people the best place to live for them.
          </span>
        </div>
        <div className=" flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">145 New York,FL 4571,USA</span>
          <div className="flexCenter f-menu">
            <span className="link">Property</span>
            <span className="link">Services</span>
            <span className="link">Products</span>
            <span className="link">About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
