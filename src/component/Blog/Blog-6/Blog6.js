import React from "react";
import "./Blog6.css";

import Newnavbar from "../../navbar/Newnavbar";
import Footer from "../../Footer/footer";

import image1 from "../../../asset/chai.jpg"
import image2 from "../../../asset/pumpkin halwa.jpg"




const Blog6 = () => {
  return (
    <div className="blog-6-bg">
      <Newnavbar/>

      <div className="blog6-content1">
        <span>#6 </span>
        <p>Flavorful Escapes: Exploring Café Sunset's Seasonal Specialties</p>
      </div>

      <div className="blog6-content2">
        <p>
          Embark on a culinary journey with Café Sunset as we unveil our
          Seasonal Specialties—a menu that mirrors the changing landscapes of
          nature. From the crisp notes of autumn to the vibrant hues of summer,
          each dish is a flavorful escape that captures the essence of the
          season.
        </p>
      </div>

      <div className="blog6-content3">
        <p id="blog6-content3-text1">Monsoon Magic: Spices and Raindrops</p>
        <img src={image1} alt="" />

        <p id="blog6-content3-text2">🌧️ Masala Chai Latte: Monsoon in a Cup</p>

        <p id="blog6-content3-text3">
          Sip on the warmth of our Masala Chai Latte, where the aromatic blend
          of spices dances with the soothing embrace of tea. It's a cup that
          encapsulates the magic of monsoon rain and the cozy moments spent
          indoors.
        </p>
      </div>


      <div className="blog6-content4">

        <p id="blog6-content4-text1">
            Autumn Spice Trail: A Harvest of Aromas
        </p>

        <p id="blog6-content4-text2">
            🍁 Pumpkin Halwa: Autumnal Indulgence
        </p>

        <img src={image2} alt="" />



        <p id="blog6-content4-text3">
            Savor the sweetness of autumn with our Pumpkin Halwa. The rich, caramelized pumpkin, adorned with nuts and
            spices, is a dessert that echoes the warmth of festive gatherings.
        </p>

      </div>



    <div className="blog6-content5">

        <p id="blog6-content5-text1">
            Culinary Escapes Await at Café Sunset
        </p>

        <p id="blog6-content5-text2">Embark on a flavorful journey through the seasons at Café Sunset, where our
            Seasonal Specialties bring the essence of India to your plate. Join us as we celebrate the ever-changing
            tapestry of flavors that mirrors the spirit of each season. Every dish is an invitation to savor the beauty
            of nature's culinary escapades, where spices, aromas, and seasonal delights intertwine in a dance of
            unparalleled gastronomic joy.
        </p>

    </div> 

      <Footer />
    </div>
  );
};

export default Blog6;
