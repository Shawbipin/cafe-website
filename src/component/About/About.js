import React from "react";
import "./about.css";

import Navbar from "../navbar/Navbar";
import image3 from "../../asset/Chef.jpg";
import image4 from "../../asset/Home Pge.jpg";



const About = () => {
  return (
    <div>
      <Navbar />

      <div className="about-container-1">
        <div className="Home-About-us">
          <div className="Home-about-heading">
            <h3>ABOUT US</h3>
            <h1>The story behind Sunset ...</h1>
          </div>
          <div className="About-para">
            <p id="Para-first">
              Welcome to Sunset Café, where our journey began with Chef André's
              bold decision to depart from the world of haute cuisine and create
              a culinary sanctuary rooted in simplicity and heartfelt
              connection.
            </p>
            <p id="Para-second">
              Inspired by a chance encounter with a charming café bathed in the
              warm glow of twilight, Chef André envisioned a place where genuine
              hospitality and exceptional flavors intertwine. At Sunset Café,
              each dish is a reflection of Chef André's dedication to crafting
              culinary experiences that nourish both body and soul.
            </p>
          </div>
        </div>

        <div className="Right-img">
          <img src={image3} alt="" />
        </div>
      </div>

      <div className="about-container-2">
          <img src={image4} alt="" />
         
        <p>
          At Sunset Café, our mission is deeply personal. Inspired by Chef
          André's journey and fueled by his passion for heartfelt connection,
          we've crafted a culinary sanctuary where every bite tells a story and
          every moment is cherished. With a commitment to authenticity, warmth,
          and sustainability, we invite you to join us in creating memories over
          delicious dishes that nourish both body and soul. Here, amidst the
          comforting glow of twilight, we celebrate community and the simple
          joys of shared meals. Welcome to our table; we can't wait to share our
          story with you.
        </p>
      </div>
    </div>
  );
};

export default About;
