import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce site, short for "electronic commerce," is a digital
          platform that enables individuals and businesses to buy and sell
          products or services over the internet. It serves as a virtual
          marketplace, providing users with the ability to browse, select, and
          purchase a wide variety of goods or services from the comfort of their
          own computer or mobile device.
        </p>
        <p></p>
      </div>
    </div>
  );
};

export default DescriptionBox;
