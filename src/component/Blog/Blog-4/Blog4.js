import React from "react";

import "./Blog4.css";
import Newnavbar from "../../navbar/Newnavbar";
import Footer from "../../Footer/footer";

const Blog4 = () => {
  return (
    <div className="blog-4-bg">
      {/* <Navbarnew /> */}
      <Newnavbar/>

      <div className="blog4-content1">
        <span>#4 </span>
        <p id="blog4-content1-text0">"Sipping Serenity: The Art of Sunset at Café Sunset</p>
      </div>

       <div className="blog4-content2">
        <p>
          As the sun gracefully descends, casting hues of amber and gold across
          the sky, Café Sunset emerges as a sanctuary where time slows, and the
          art of sipping becomes an ode to serenity. Join us on a poetic journey
          through the evening, where every cup holds the essence of twilight and
          the tranquil ambiance creates a canvas for moments to unfold.
        </p>
      </div>


      <div className="blog4-content3">
        <p id="blog4-content3-text1">
          Sunset Brews: Crafting Tranquility in a Cup
        </p>
        <p id="blog4-content3-text2">
          In the gentle glow of dusk, our Sunset Brews take center stage, each
          crafted to embody the essence of the setting sun. From the robust
          notes of Sunset Espresso to the soothing embrace of Sunset Chai, our
          beverages are more than drinks – they are elixirs that encapsulate the
          art of serenity. As you take that first sip, allow the flavors to
          transport you to a realm where time is a gentle river.
        </p>
      </div>


      <div className="blog4-content4">
        <p id="blog4-content4-text1">
          Sunset Conversations: Where Words Mingle Like Shadows
        </p>

        <p id="blog4-content4-text2">
          At Café Sunset, conversations take on a poetic quality, where words
          mingle like shadows cast by the setting sun. Whether you're engrossed
          in a novel, catching up with friends, or lost in your own thoughts,
          the ambiance encourages a gentle flow of Sunset Conversations. It's a
          space where connections deepen, and the art of communication becomes
          as soothing as the fading daylight.
        </p>
      </div>



      <div className="blog4-content5">
        <p id="blog4-content5-text1">
          🌅 Café Sunset - Where Twilight Unfolds in Every Sip 🌅
        </p>

        <p id="blog4-content5-text2">
          For inquiries and reservations, contact us . <br />
          Follow us on [Social Media Links] for the latest updates and exclusive
          offers.
        </p>
      </div>


      <Footer />
    </div>
  );
};

export default Blog4;
