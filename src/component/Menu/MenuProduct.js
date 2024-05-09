import React from 'react'

const menuProduct = (props) => {
  return (
    <div>
       <div className="card-menu">
        <img src={props.url} alt="productimage" className="product-image-menu" />
      </div>
    </div>
  )
}

export default menuProduct;



