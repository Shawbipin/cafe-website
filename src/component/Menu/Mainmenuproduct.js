import React from 'react'

const Mainmenuproduct = (props) => {

  return (

    <div>
      <div className="card5">
        <img src={props.url} alt="productimage" className="product5-image" />
        <h2 className="text5">{props.text}</h2>
      </div>
    </div>
  )
}

export default Mainmenuproduct;



