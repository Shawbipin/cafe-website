import React from "react";
import "./Menu-2.css";

import Newnavbar from "../../navbar/Newnavbar";
import Footer from "../../Footer/footer";
import Menucarousel from "../Carousel/Menucarousel";

import image1 from "../../../asset/chinese 1.jpg";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { TbCircleArrowDown } from "react-icons/tb";

import image2 from "../../../asset/Spring roll.jpg";
import image3 from "../../../asset/mob-26.jpeg";
import image4 from "../../../asset/noodle soup.jpg";
// import image5 from "../../../asset/chicken with brocoli.jpg";
// import image6 from "../../../asset/noodle soup.jpg";
// import image7 from "../../../asset/burger.jpg";
// import image8 from "../../../asset/Vadapav.jpg";

// import image9 from "../../../asset/mob-27.png";
// import image10 from "../../../asset/mob-28.png";
// import image11 from "../../../asset/Vadapav.jpg";
// import image12 from "../../../asset/Seekh.jpg";


const Menu2 = () => {
  return (
    <div className="menu-2-bg">

      <Newnavbar customClassName="meun2-navbar-bg" />

      <div className="menu2-home-bg">
        <img src={image1} alt="" />
      </div>

      <Menucarousel />

      <div className="menu2-heading">
        <div className="menu2heading-1">
          <p>APPETIZERS</p>
        </div>

        <div className="menu2heading-2">
          <p>RICE AND NOODLES</p>
        </div>
      </div>

      <div className="menu2item-bag">
        
        <div className="menu2item-bag-1">

          <div className="moblie-item1-heading">
            <p>APPETIZERS</p>
          </div>

          <div className="menu2item-1">
            <p id="menu2item-bag-heading">Spring Rolls Trio</p>
            <p id="menu2-price">210/-</p>

            <div className="menu2-item-img">
              <img src={image2} alt="" />
            </div>

            <p id="menu2-increment">
              <span>
                <FiPlus />
              </span>{" "}
              1{" "}
              <span>
                <FiMinus />
              </span>
            </p>

            <button id="add-btn">ADD +</button>
          </div>

          <p id="menu2-line"> </p>

          <div className="menu2heading-4">
            <p> soups </p>
          </div>

          <div className="menu2item-2">
            <p id="menu2item-bag-heading">Hot and Sour Soup</p>
            <p id="menu2-price">399/-</p>

            <div className="menu2-item-img">
              <img src={image3} alt="" />
            </div>

            <p id="menu2-increment">
              <span>
                <FiPlus />
              </span>{" "}
              1{" "}
              <span>
                <FiMinus />
              </span>
            </p>
            <button id="add-btn">ADD +</button>
          </div>

          <p id="menu2-line"> </p>

          <div className="menu2item-3">
            <p id="menu2item-bag-heading">Wonton Noodle Soup</p>
            <p id="menu2-price">399/-</p>

            <div className="menu2-item-img">
              <img src={image4} alt="" />
            </div>

            <p id="menu2-increment">
              <span>
                <FiPlus />
              </span>{" "}
              1{" "}
              <span>
                <FiMinus />
              </span>
            </p>
            <button id="add-btn">ADD +</button>
          </div>

          <p id="menu2-line"> </p>

          <div className="menu2heading-4-extra">
            <p> MAIN COURSE</p>
          </div>

          <div className="menu2item-4">
            <p id="menu2item-bag-heading">Sichuan Chicken with Broccoli</p>
            <p id="menu2-price">350/-</p>

            <div className="menu2-item-img">
              <img src={image3} alt="" />
            </div>
            <p id="menu2-increment">
              <span>
                <FiPlus />
              </span>{" "}
              1{" "}
              <span>
                <FiMinus />
              </span>
            </p>
            <button id="add-btn">ADD +</button>
          </div>

          <p id="menu2-line"> </p>

          <div className="menu2item-5">
            <p id="menu2item-bag-heading">Cantonese Vegetable Chow Mein</p>
            <p id="menu2-price">350/-</p>

            <div className="menu2-item-img">
              <img src={image3} alt="" />
            </div>
            <p id="menu2-increment">
              <span>
                <FiPlus />
              </span>{" "}
              1{" "}
              <span>
                <FiMinus />
              </span>
            </p>
            <button id="add-btn">ADD +</button>
          </div>

          <p id="menu2-line"> </p>


          <div className="moblie-item2-heading">
            <p>Rice and Noodles</p>
          </div>


          <div className="menu2item-6">
            <p id="menu2item-bag-heading">Veg Seekh Kebab Sub</p>
            <p id="menu2-price">350/-</p>

            <div className="menu2-item-img">
              <img src={image3} alt="" />
            </div>
            <p id="menu2-increment">
              <span>
                <FiPlus />
              </span>{" "}
              1{" "}
              <span>
                <FiMinus />
              </span>
            </p>
            <button id="add-btn">ADD +</button>
          </div>

          <p id="menu2-line"> </p>

        </div>


        <div className="menu2item-bag-2">

          <div className="menu2item-1">
            <p id="menu2item-bag-heading">Yangzhou Fried RicE</p>
            <p id="menu2-price">210/-</p>

            <div className="menu2-item-img">
              <img src={image2} alt="" />
            </div>

            <p id="menu2-increment">
              <span>
                <FiPlus />
              </span>{" "}
              1{" "}
              <span>
                <FiMinus />
              </span>
            </p>
            <button id="add-btn">ADD +</button>
          </div>
          <p id="menu2-line"> </p>


          <div className="menu2item-1">
            <p id="menu2item-bag-heading">Dan Dan Noodles</p>
            <p id="menu2-price">210/-</p>

            <div className="menu2-item-img">
              <img src={image2} alt="" />
            </div>
            <p id="menu2-increment">
              <span>
                <FiPlus />
              </span>{" "}
              1{" "}
              <span>
                <FiMinus />
              </span>
            </p>
            <button id="add-btn">ADD +</button>
          </div>
          <p id="menu2-line"> </p>

          <div className="menu2heading-3">Sweet Conclusions</div>

          <div className="menu2item-1">
            <p id="menu2item-bag-heading">Mango Sticky Rice Spring Rolls</p>
            <p id="menu2-price">210/-</p>

            <div className="menu2-item-img">
              <img src={image2} alt="" />
            </div>
            <p id="menu2-increment">
              <span>
                <FiPlus />
              </span>{" "}
              1{" "}
              <span>
                <FiMinus />
              </span>
            </p>
            <button id="add-btn">ADD +</button>
          </div>


          <p id="menu2-line"> </p>


        </div>
      </div>

      <div className="icon">
        <span>
          <TbCircleArrowDown />
        </span>
      </div>

      <Footer />
    </div>
  );
};

export default Menu2;
