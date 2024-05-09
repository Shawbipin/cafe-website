import React from "react";
import { Link } from "react-router-dom";


const Blogproduct2 = (props) => {

  return (

    <div>
      <div className="blog2-card">
        <img
          src={props.url}
          alt="productimage"
          className="blog2-product-image"
        />

        <div className="blog2-text-part">
          <h2>{props.text}</h2>
        </div>
        
        <Link>
        <p className="blog2-description">{props.description}</p>
        </Link>
      </div>
    </div>
  );
};

export default Blogproduct2;
