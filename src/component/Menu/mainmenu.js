import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

import "./mainmenu.css";
import React from "react";
import Newnavbar from "../navbar/Newnavbar";
import { CiHeart } from "react-icons/ci";

import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import Footer from "../Footer/footer";
// import menu from "./menu"

// import image10 from "../../asset/mob-1.jpeg"
import image1 from "../../asset/1-img.jpg";
import image2 from "../../asset/2-img.jpg";
import image3 from "../../asset/3-img.jpg";



import image8 from "../../asset/mob-1.jpeg";
import image9 from "../../asset/mob-2.jpeg";
import image10 from "../../asset/mob-3.jpeg";
import image11 from "../../asset/mob-4.png";
import image12 from "../../asset/mob-5.jpeg";

import image13 from "../../asset/mob-6.jpeg";
import image14 from "../../asset/mob-7.jpeg";
import image15 from "../../asset/mob-8.jpeg";
import image16 from "../../asset/mob-9.jpeg";
import image17 from "../../asset/mob-10.jpeg";
import image18 from "../../asset/mob-11.jpeg";
import image19 from "../../asset/mob-12.jpeg";
import image20 from "../../asset/mob-13.jpeg";

import { IoGiftOutline } from "react-icons/io5";

import { productDatamenu, responsivemenu } from "./menudata";

import MenuProduct from "./MenuProduct";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Mainmenuproduct from "./Mainmenuproduct";
import { mainmenuproductData, mainmenuresponsive } from "./mainmenudata";

const Mainmenu = () => {
  const menuproduct = productDatamenu.map((item) => (
    <MenuProduct name={item.name} url={item.imageurl} />
  ));

  const mainmenuproduct = mainmenuproductData.map((item) => (
    <Mainmenuproduct name={item.name} url={item.imageurl} text={item.text} />
  ));

  return (
    <div className="mainmenu-bg-color">
      <div className="Mainmenu-bg">
        <Newnavbar />
      </div>

      <div class="menu-home">
        <p id="home-text-1">S U N S E T</p>
        <p id="home-text-2">CAFE</p>
      </div>

      <div className="moblie-mainmenucontent-1">
        <p id="moblie-mainmenucontent-1-text1">FOR YOU</p>
      </div>

      <div className="moblie-mainmenucontent-2">
        <img src={image3} alt="" />

        <p id="moblie-mainmenucontent-2-text1">SPECIALTY DRINKS</p>
      </div>

      <div className="moblie-mainmenucontent-3">
        <div className="mainmenucontent-3-part1">
          <p id="moblie-mainmenucontent-3-text1">Matcha Latte</p>
          <p id="moblie-mainmenucontent-3-text2">Rs.140</p>
          <img src={image8} alt="" />
          <span id="moblie-mainmenu">
            <CiHeart />
          </span>

          <p id="moblie-mainmenu-increment">
            <span>
              <FiPlus />
            </span>{" "}
            1{" "}
            <span>
              <FiMinus />
            </span>
          </p>
        </div>

        <p id="Mainmenu-line1"></p>

        <div className="mainmenucontent-3-part1">
          <p id="moblie-mainmenucontent-3-text1">Turmeric Latte</p>
          <p id="moblie-mainmenucontent-3-text2">Rs.110</p>
          <img src={image9} alt="" />
          <span id="moblie-mainmenu">
            <CiHeart />
          </span>
          <p id="moblie-mainmenu-increment">
            <span>
              <FiPlus />
            </span>{" "}
            1{" "}
            <span>
              <FiMinus />
            </span>
          </p>
        </div>
        <p id="Mainmenu-line1"></p>

        <div className="mainmenucontent-3-part1">
          <p id="moblie-mainmenucontent-3-text1">Caramel Tea</p>
          <p id="moblie-mainmenucontent-3-text2">Rs.190</p>
          <img src={image10} alt="" />
          <span id="moblie-mainmenu">
            <CiHeart />
          </span>

          <p id="moblie-mainmenu-increment">
            <span>
              <FiPlus />
            </span>{" "}
            1{" "}
            <span>
              <FiMinus />
            </span>
          </p>
        </div>

        <p id="Mainmenu-line1"></p>

        <div className="mainmenucontent-3-part1">
          <p id="moblie-mainmenucontent-3-text1">Green Tea</p>
          <p id="moblie-mainmenucontent-3-text2">Rs.160</p>
          <img src={image11} alt="" />
          <span id="moblie-mainmenu">
            <CiHeart />
          </span>
          <p id="moblie-mainmenu-increment">
            <span>
              <FiPlus />
            </span>{" "}
            1{" "}
            <span>
              <FiMinus />
            </span>
          </p>
        </div>
        <p id="Mainmenu-line1"></p>

        <div className="mainmenucontent-3-part1">
          <p id="moblie-mainmenucontent-3-text1">Herbal Infusions</p>
          <p id="moblie-mainmenucontent-3-text2">Rs.240</p>
          <img src={image12} alt="" />
          <span id="moblie-mainmenu">
            <CiHeart />
          </span>
          <p id="moblie-mainmenu-increment">
            <span>
              <FiPlus />
            </span>{" "}
            1{" "}
            <span>
              <FiMinus />
            </span>
          </p>
        </div>
        <p id="Mainmenu-line1"></p>
      </div>

      <div className="moblie-mainmenucontent-4">
        <img src={image2} alt="" />
        <p id="moblie-mainmenucontent-4-text1">HOT BEVERAGES</p>
      </div>

      <div className="moblie-mainmenucontent-5">
        <div className="mainmenucontent-5-part1">
          <p id="moblie-mainmenucontent-5-text1">Espresso</p>
          <p id="moblie-mainmenucontent-5-text2">Rs.120</p>
          <img src={image13} alt="" />
          <span id="moblie-mainmenu">
            <CiHeart />
          </span>

          <p id="moblie-mainmenu-increment">
            <span>
              <FiPlus />
            </span>{" "}
            1{" "}
            <span>
              <FiMinus />
            </span>
          </p>
        </div>

        <p id="Mainmenu-line1"></p>

        <div className="mainmenucontent-5-part1">
          <p id="moblie-mainmenucontent-5-text1">Cappuccino</p>
          <p id="moblie-mainmenucontent-5-text2">Rs.240</p>
          <img src={image14} alt="" />
          <span id="moblie-mainmenu">
            <CiHeart />
          </span>
          <p id="moblie-mainmenu-increment">
            <span>
              <FiPlus />
            </span>{" "}
            1{" "}
            <span>
              <FiMinus />
            </span>
          </p>
        </div>
        <p id="Mainmenu-line1"></p>

        <div className="mainmenucontent-5-part1">
          <p id="moblie-mainmenucontent-5-text1">Americano</p>
          <p id="moblie-mainmenucontent-5-text2">Rs.190</p>
          <img src={image15} alt="" />
          <span id="moblie-mainmenu">
            <CiHeart />
          </span>

          <p id="moblie-mainmenu-increment">
            <span>
              <FiPlus />
            </span>{" "}
            1{" "}
            <span>
              <FiMinus />
            </span>
          </p>
        </div>
        <p id="Mainmenu-line1"></p>
      </div>

      <div className="moblie-mainmenucontent-6">
        <img src={image1} alt="" />
        <p id="moblie-mainmenucontent-6-text1">COLD BEVERAGES</p>
      </div>

      <div className="moblie-mainmenucontent-7">
        <div className="mainmenucontent-7-part1">
          <p id="moblie-mainmenucontent-7-text1">Iced Coffee</p>
          <p id="moblie-mainmenucontent-7-text2">Rs.140</p>
          <img src={image16} alt="" />
          <span id="moblie-mainmenu">
            <CiHeart />
          </span>

          <p id="moblie-mainmenu-increment">
            <span>
              <FiPlus />
            </span>{" "}
            1{" "}
            <span>
              <FiMinus />
            </span>
          </p>
        </div>

        <p id="Mainmenu-line1"></p>

        <div className="mainmenucontent-7-part1">
          <p id="moblie-mainmenucontent-7-text1">Iced Latte</p>
          <p id="moblie-mainmenucontent-7-text2">Rs.130</p>
          <img src={image17} alt="" />
          <span id="moblie-mainmenu">
            <CiHeart />
          </span>
          <p id="moblie-mainmenu-increment">
            <span>
              <FiPlus />
            </span>{" "}
            1{" "}
            <span>
              <FiMinus />
            </span>
          </p>
        </div>
        <p id="Mainmenu-line1"></p>

        <div className="mainmenucontent-7-part1">
          <p id="moblie-mainmenucontent-7-text1">Frappuccino</p>
          <p id="moblie-mainmenucontent-7-text2">Rs.110</p>
          <img src={image18} alt="" />
          <span id="moblie-mainmenu">
            <CiHeart />
          </span>

          <p id="moblie-mainmenu-increment">
            <span>
              <FiPlus />
            </span>{" "}
            1{" "}
            <span>
              <FiMinus />
            </span>
          </p>
        </div>

        <p id="Mainmenu-line1"></p>

        <div className="mainmenucontent-7-part1">
          <p id="moblie-mainmenucontent-7-text1">Affogato</p>
          <p id="moblie-mainmenucontent-7-text2">Rs.120</p>
          <img src={image19} alt="" />
          <span id="moblie-mainmenu">
            <CiHeart />
          </span>
          <p id="moblie-mainmenu-increment">
            <span>
              <FiPlus />
            </span>{" "}
            1{" "}
            <span>
              <FiMinus />
            </span>
          </p>
        </div>
        <p id="Mainmenu-line1"></p>

        <div className="mainmenucontent-7-part1">
          <p id="moblie-mainmenucontent-7-text1">Ice Latte</p>
          <p id="moblie-mainmenucontent-7-text2">Rs.110</p>
          <img src={image20} alt="" />
          <span id="moblie-mainmenu">
            <CiHeart />
          </span>
          <p id="moblie-mainmenu-increment">
            <span>
              <FiPlus />
            </span>{" "}
            1{" "}
            <span>
              <FiMinus />
            </span>
          </p>
        </div>
      </div>

      <div class="mainmenu-home-img">
        <div class="menu-img-1">
          <img src={image1} alt="img" />
          <button>HOT BEVERAGES</button>
        </div>

        <div class="menu-img-2">
          <img src={image2} alt="img" />
          <button>COLD BEVERAGES</button>
        </div>

        <div class="menu-img-3">
          <img src={image3} alt="img" />
          <button>SPECIALTY DRINKS</button>
        </div>
      </div>

      <div class="mainmeun-container">
        <div class="mainmeun-container-1">
          <div class="item-1">
            <p class="item-text-1">Espresso</p>
            <p class="item-text-2">A single shot of concentrated coffee</p>
            <button>
              <FaPlus />
            </button>
          </div>

          <div class="item-2">
            <p class="item-text-1">Cappuccino</p>
            <p class="item-text-2">
              Equal parts espresso steamed milk, and foam
            </p>
            <button>
              <FaPlus />
            </button>
          </div>

          <div class="item-3">
            <p class="item-text-1">Americano</p>
            <p class="item-text-2">Espresso shots with hot water</p>
            <i class="fa-solid fa-plus"></i>
            <button>
              <FaPlus />
            </button>
          </div>
        </div>

        <div class="mainmeun-container-2">
          <div class="item-1">
            <p class="item-text-1">Iced Coffee</p>
            <p class="item-text-2">Rs.140</p>
            <button>
              <FaPlus />
            </button>
          </div>

          <div class="item-2">
            <p class="item-text-1">Iced Latte</p>
            <p class="item-text-2">Rs.130</p>
            <button>
              <FaPlus />
            </button>
          </div>

          <div class="item-3">
            <p class="item-text-1">Frappuccino</p>
            <p class="item-text-2">Rs.110</p>
            <button>
              <FaPlus />
            </button>
          </div>
          <div class="item-4">
            <p class="item-text-1">Affogato</p>
            <p class="item-text-2">Rs.110</p>
            <button>
              <FaPlus />
            </button>
          </div>

          <div class="item-5">
            <p class="item-text-1">Ice Latte</p>
            <p class="item-text-2">Rs.110</p>
            <button>
              <FaPlus />
            </button>
          </div>
        </div>

        <div class="mainmeun-container-3">
          <div class="item-1">
            <p class="item-text-1">Matcha Latte</p>
            <p class="item-text-2">Rs.140</p>
            <button>
              <FaPlus />
            </button>
          </div>

          <div class="item-2">
            <p class="item-text-1">Turmeric Latte</p>
            <p class="item-text-2">Rs.130</p>
            <button>
              <FaPlus />
            </button>
          </div>

          <div class="item-3">
            <p class="item-text-1">Caramel Tea</p>
            <p class="item-text-2">Rs.110</p>
            <button>
              <FaPlus />
            </button>
          </div>
          <div class="item-4">
            <p class="item-text-1">Green Tea</p>
            <p class="item-text-2">Rs.110</p>
            <button>
              <FaPlus />
            </button>
          </div>

          <div class="item-5">
            <p class="item-text-1">Herbal Infusions</p>
            <p class="item-text-2">Rs.110</p>
            <button>
              <FaPlus />
            </button>
          </div>
        </div>
      </div>

      <div class="Other-cate">
        <p>OTHER CATEGORIES</p>
      </div>

      <div class="Explore">
        <Carousel responsive={mainmenuresponsive}>{mainmenuproduct}</Carousel>
      </div>

      <div class="explore-btn">
        <button>
          <Link to="/mainmenu/menus">
            <span>EXPLORE</span>
          </Link>
        </button>
      </div>

      <div class="Best-offer">
        <span>BEST OFFERS</span>
        <span>
          {" "}
          <IoGiftOutline />
        </span>
      </div>

      <Carousel responsive={responsivemenu}>{menuproduct}</Carousel>

    

      <Footer/> 
    </div>
  );
};

export default Mainmenu;
