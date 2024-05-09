import React from "react";
import "./menu.css";
import Footer from "../Footer/footer";

import Newnavbar from "../navbar/Newnavbar";
import { Link } from "react-router-dom";

import image1 from "../../asset/menu-img.png";
import image2 from "../../asset/burger.jpg";
import image3 from "../../asset/chinese.jpg";
import image4 from "../../asset/st1.jpg";
import image5 from "../../asset/sides.jpg";
import image6 from "../../asset/salads.jpg";
import image7 from "../../asset/ice-creame.jpg";
import image8 from "../../asset/main.jpg";
import image9 from "../../asset/slide-2.jpg";

import image10 from "../../asset/beverages.jpg";
import { FaAngleDown } from "react-icons/fa6";



const Menu = () => {

  return (

    <div className="main-bg-color">

      <div className="mainmenu-bg">
            <Newnavbar  />
      </div>

      <div className="menu-home-bg">
        <img src={image1} alt="" />
      </div>

      <div className="menu-heading">
        <p id="heading-text">WHAT’S ON YOUR MIND?</p>
      </div>
      <div className="grid-container">

        <div className="grid-item">

          <img src={image2} alt="" />
          <p>BURGER & SANDWICHES </p>

        </div>

        <div className="grid-item">
          <img src={image3} alt="" />
          <p> CHINESE CUSINE</p>
        </div>

        <div className="grid-item">
          <img src={image4} alt="" />
          <p>STARTERS</p>
        </div>

        <div className="grid-item">
          <img src={image5} alt="" />
          <p>SIDES </p>
        </div>

        <div className="grid-item">
          <img src={image6} alt="" />
          <p> SALADS</p>
        </div>

        <div className="grid-item">
          <img src={image7} alt="" />
          <p>DESSERTS / ICE-CREAM </p>
        </div>

        <div className="grid-item">
          <img src={image8} alt="" />
          <p>MAIN COURSE</p>
        </div>

        <div className="grid-item">
          <img src={image9} alt="" />
          <p >VALUE COMBO</p>
        </div>

        <div className="grid-item">
          <img src={image10} alt="" />
          <p> BEVERAGES</p>
        </div>

        <div className="grid-item-extra">
          <img src={image4} alt="" />
          <p>BLUEBERRY</p>
        </div>
      </div>

      <div className="see-more">
        <Link to="/menu-1">
          <span>
            <FaAngleDown />{" "}
          </span>
        </Link>

        <p>See More</p>
      </div>

      <Footer />
    </div>
  );
};

export default Menu;
