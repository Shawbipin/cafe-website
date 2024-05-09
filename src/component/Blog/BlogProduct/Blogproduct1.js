import React from "react";



const Blogproduct1 = (props) => {
  return (
    <div>
      
      <div className="blog1-card">

        <img
          src={props.url}
          alt="blog1-productimage"
          className="product-blog1-image"
        />

        <div className="blog1-icon-part">
          <h2>{props.icon}</h2>
          
        </div>
        <p className="blog1-description">{props.description}</p>
      </div>


    </div>
  );
};

export default Blogproduct1;


