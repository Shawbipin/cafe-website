import React from "react";
import "./Blog5.css";

import Newnavbar from "../../navbar/Newnavbar";
import Footer from "../../Footer/footer";

import image1 from "../../../asset/pas.jpg";

const Blog5 = () => {
  return (
    <div className="blog-5-bg">
      {/* <Navbarnew /> */}
      <Newnavbar/>

      <div className="blog5-content1">
        <span>#5 </span>
        <p>Bites of Bliss: The Sweet Symphony of Pastries at Café Sunset</p>
      </div>

       <div className="blog5-content2">
        <p>
          As the sun gracefully descends, casting hues of amber and gold across
          the sky, Café Sunset emerges as a sanctuary where time slows, and the
          art of sipping becomes an ode to serenity. Join us on a poetic journey
          through the evening, where every cup holds the essence of twilight and
          the tranquil ambiance creates a canvas for moments to unfold.
        </p>
      </div>

     <div className="blog5-content3">
        <img src={image1} alt="" />
      </div>


      <div className="blog5-content4">
        <p>
          Experience the burst of freshness with our berry-infused pastries.
          From luscious strawberry tarts to blueberry-filled delights, each bite
          is a celebration of nature's vibrant hues and the sweet melody of
          ripe, juicy berries.
        </p>
      </div>

 

      <div className="blog5-content5">
        <p id="blog5-content5-text1">
          Pairing with Perfection: Your Ideal Culinary Duet
        </p>
        <p id="blog5-content5-text2">
          At Café Sunset, we understand that the perfect pastry deserves an
          equally perfect pairing. Whether it's a steaming cup of artisan
          coffee, a fragrant herbal tea, or a velvety latte, our baristas will
          guide you to the ideal culinary duet to enhance your pastry
          experience.
        </p>
      </div>


      <div className="blog5-content6">
       
       <p id="blog5-content6-text1">Bites of Bliss: Your Invitation to Indulgence
       </p>
       
       <p id="blog5-content6-text2">
           Café Sunset invites you to experience the sweet symphony of pastries—a crescendo of flavors, textures, and <br/>
           moments that elevate the simple act of biting into a blissful indulgence.
           Join us for a pastry sojourn at Café Sunset, where every bite is a note in the melody of sweetness, and the art
           of pastry becomes a delightful journey into the heart of indulgence.
       </p>

       </div> 
       
      <Footer />
    </div>
  );
};

export default Blog5;
