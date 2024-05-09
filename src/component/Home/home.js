import React from "react";
import Footer from "../Footer/footer";
import Navbar from "../navbar/Navbar";
// import Newnavbar from "../navbar/Newnavbar";


import { Link } from "react-router-dom";
import "./home.css";



import image1 from "../../asset/Home Pge.jpg";
import image3 from "../../asset/Chef.jpg";
import image4 from "../../asset/reserve.jpg";
import image5 from "../../asset/morning.jpg";

import Product from "./ProDuct/Product";
import Product1 from "./ProDuct/Product1";
import Product2 from "./ProDuct/Product2";

import { productData, responsive } from "./Data/data";
import { productData1, responsive1 } from "./Data/data1";
import { productData2, responsive2 } from "./Data/data2";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const Home = () => {

 


  const product = productData.map((item) => (
    <Product
      key = {item.id}
      name={item.name}
      url={item.imageurl}
      text={item.text}
      description={item.description}
      footer={item.footer}
    />
  ));

  const product1 = productData1.map((item1) => (
    <Product1
      key = {item1.id}
      name={item1.name}
      url={item1.imageurl}
      text1={item1.text1}
      text2={item1.text2}
      text3={item1.text3}
      text4={item1.text4}
      text5={item1.text5}
    />
  ));

  const product2 = productData2.map((item1) => (
    <Product2 
    key = {item1.id}
    name={item1.name} 
    text={item1.text} />
  ));

  return (
    
    <div>
      
      <div className="container-1">
        <div className="overlay"></div>

        <div className="home-bg">
          <img src={image1} alt="img" />
        </div>

         <Navbar />

        <div className="left-part">
          <div className="welcome">WELCOME</div>

          <div className="left-text-1">
            <p>
              Discover Culinary Elegance at Café Sunset: Where Every Sip and
              Bite Unveils a Symphony of Flavors and Moments.
            </p>
          </div>

          <div className="left-text-2">
            <div className="first">
              <p>Gateway to Serenity, Culinary Delights,</p>
            </div>

            <div className="second">
              <p>
                Step into a World Where Ambiance, Flavor, and Warmth Converge— A
                Haven Where Every Visit Feels Like Coming Home.
              </p>
            </div>
          </div>
          <button> Order Now </button>
        </div>

        <div className="home-slider">
          <p>we are known for :- </p>

          <Carousel 
          responsive={responsive}
          infinite ={true}
          >{product}</Carousel>
        </div>
      </div>

      <div className="container-2">
        <div className="home-About-us">
          <div className="home-about-heading">
            <h3> ABOUT US </h3>
            <h1>The story behind Sunset ...</h1>
          </div>
          <div className="about-para">
            <p id="para-first">
              Welcome to Sunset Café, where our journey began with Chef André's
              bold decision to depart from the world of haute cuisine and create
              a culinary sanctuary rooted in simplicity and heartfelt
              connection.
            </p>
            <p id="para-second">
              Inspired by a chance encounter with a charming café bathed in the
              warm glow of twilight, Chef André envisioned a place where genuine
              hospitality and exceptional flavors intertwine. At Sunset Café,
              each dish is a reflection of Chef André's dedication to crafting
              culinary experiences that nourish both body and soul.
            </p>
          </div>
          <button>
            <Link to="/about">READ MORE</Link>
          </button>
        </div>

        <div className="right-img">
          <img src={image3} alt="" />
        </div>
      </div>

      <div className="container-3">
        <p id="deals">DEALS AND OFFEERS</p>

        <Carousel
          responsive={responsive1}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          // showDots={true}
          removeArrowOnDeviceType={["tablet", "mobile", "superLargeDesktop"]}
          transitionDuration={3000}
          keyBoardControl={true}
        >
          {product1}
        </Carousel>
      </div>

      <div className="container-4">
        <img src={image4} alt="img" />

        <div className="reserve">
          <p id="reserve-heading-1">Reservation</p>
          <p id="reserve-heading-2">BOOK A TABLE ONLINE</p>
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Your Email" />
          <input type="text" placeholder="Date & Time" />
          <input type="text" placeholder="No of People" />
          <input
            type="text"
            placeholder="Special Request"
            id="reserve-last-input"
          />
          <button>BOOK NOW</button>
        </div>
      </div>

      <div className="container-5">
        <img src={image5} alt="" />

        <div className="subscribe-overlay">
          <p className="author"> -Motivation Being Our Hard Work</p>

          <Carousel
            responsive={responsive2}
            infinite={true}
            // autoPlay={true}
            // autoPlaySpeed={3000}
            // showDots={true}
            // removeArrowOnDeviceType={["tablet", "mobile", "superLargeDesktop"]}
            // transitionDuration={2000}
          >
            {product2}
          </Carousel>
        </div>

        <div className="subscribe-lower-bg">
          <div className="subscribe-text">
            <p id="Subscribe-text-1">Subscribe To Newsletter</p>
            <p id="Subscribe-text-2"> and Get -20% off</p>
            <p id="Subscribe-text-3">
              Your Gateway to Serenity, Culinary Delights, and Unforgettable
              Moments.
            </p>

            <form className="subscribe-form">
              <input
                type="email"
                name="email"
                placeholder="Enter email address..."
                required
              />
              <button type="submit">SUBSCRIBE</button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
