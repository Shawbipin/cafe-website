import React from 'react'
import { Link } from 'react-router-dom';

const Carouselproduct = (props) => {
  return (
    <div>
      <div className="menu1card">
        <h2 className="menu1text">
          <Link to ={props.link}>
               {props.text}
          </Link>
          </h2>
      </div>
    </div>
  )
}

export default Carouselproduct;




