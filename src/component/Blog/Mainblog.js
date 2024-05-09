import React from "react";
import "./Mainblog.css";

import Navbarnew from "../navbar/Navbarnew";
import Footer from "../Footer/footer";

import image1 from "../../asset/blog1.jpeg";

import Blogproduct1 from "./BlogProduct/Blogproduct1";
import { blog1responsive } from "./Blogdata/Maindata1";
import { blog1ProductData } from "./Blogdata/Maindata1";



import Blogproduct2 from "./BlogProduct/Blogproduct2";
import { blog2ProductData, blog2responsive } from "./Blogdata/Maindata2";


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const Mainblog = () => {
  const blog1productdata = blog1ProductData.map((item) => (
    <Blogproduct1
      name={item.name}
      url={item.imageurl}
      icon={item.icon}
      description={item.description}
    />
  ));

  const blog2productdata = blog2ProductData.map((item) => (
    <Blogproduct2
      name={item.name}
      url={item.imageurl}
      text={item.text}
      description={item.description}
    />
  ));

  return (

    <div className="main-blog-bg">

      <Navbarnew />

      <div className="mainblog-bg">
        <div className="mainblog-overlay"> </div>

        <div className="mainblog-content">
          <img src={image1} alt="" />
          <p id="mainblog-text-1">SUNSET </p>
          <p id="mainblog-text-2">OUR VISION</p>
          <p id="mainblog-text-3">
            To create a haven where every cup is a canvas, painting moments of
            serenity and connection against the backdrop of a setting sun.
          </p>
        </div>
      </div>


      <div className="mainblog-slider">
        
         <p id="mainblog-slider-text1">LATEST BLOG POST</p>

        <Carousel responsive={blog2responsive}>
                  {blog2productdata}
        </Carousel>
      </div>

      <div className="mainblog-review-slider">
        <div className="review-slider-heding">
          <p>FEATURED REVIEW VIDEOS</p>
        </div>

        <div className="review-card">
          <Carousel responsive={blog1responsive}>{blog1productdata}</Carousel>
        </div>
        
      </div>

      <div className="mainbolg-experience">
        <p id="experience-text-1">Share Your Experience!</p>
        <p id="experience-text-2">
          Have you recently visited Café Sunset? We'd love to hear about your
          experience!
        </p>
        <p id="experience-text-3">
          Send your reviews and feedback and who knows – your review might be
          featured here next!
        </p>
        <div className="mainbolg-experience-input">
          <input
            type="text"
            placeholder="Leave Your Review Here...."
            id="experience-text-4"
          />
          <button>Submit</button>
        </div>
      </div>

 

      <Footer />
    </div>
  );
};

export default Mainblog;
