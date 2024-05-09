import React from "react";

const Product = (props) => {
  return (
    // <slider>
      <div className="card">
        <img src={props.url} alt="productimage" className="producthome-image" />
        <h2 className="text">{props.text}</h2>
        <p className="description">{props.description}</p>

          <p className="home-slider-footer-text">{props.footer}</p>
          <p className="home-slider-footer-icon">{props.icon}</p>

      </div>
    // </slider>
  );
};

export default Product;


