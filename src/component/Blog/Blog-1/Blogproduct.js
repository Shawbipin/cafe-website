import React from "react";

const Blogproduct = (props) => {
  return (
    <div>
      <div className="blog-part1-card">
        <h2 className="blog-part1-text">{props.text}</h2>
        <img src={props.url} alt="productimage" className="blog-prod-image" />
        <p className="blog-part1-description">{props.description}</p>
      </div>
    </div>
  );
};

export default Blogproduct;
