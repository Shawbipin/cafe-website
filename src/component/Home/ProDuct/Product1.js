import React from "react";

const Product1 = (props1) => {
  return (
    <div>
      <div className="card1">
        <img src={props1.url} alt="product1image" className="product1-image" />
        <h2 className="text1">{props1.text1}</h2>
        <p className="text2">{props1.text2}</p>
        <p className="text3">{props1.text3}</p>
        <p className="text4">{props1.text4}</p>
        <button>
          <p className="offertext5">{props1.text5}</p>
        </button>
      </div>
    </div>
  );
};


export default Product1;




