import React, { useState } from "react";
import "./Blog1.css";

import Newnavbar from "../../navbar/Newnavbar";
import Footer from "../../Footer/footer";
import { FaChevronDown } from "react-icons/fa";

import image1 from "../../../asset/sala.jpg";
import image2 from "../../../asset/infusion.jpg";

import image3 from "../../../asset/Live events (1).jpeg";
import image4 from "../../../asset/Live events (1).jpg";
import image5 from "../../../asset/Live events (2).jpeg";
import image6 from "../../../asset/Live events (2).jpg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Blogproduct from "./Blogproduct";
import { blogresponsive } from "./Blogdata";
import { blogproductData } from "./Blogdata";

const Blog1 = () => {
  const blogproduct = blogproductData.map((item) => (
    <Blogproduct
      name={item.name}
      text={item.text}
      url={item.imageurl}
      description={item.description}
    />
  ));

  const [showcontent5, setshowcontent5] = useState(false);

  const togglecontent5 = () => {
    setshowcontent5(!showcontent5);
  };

  return (
    <div className="blog-1-bg">
      <Newnavbar />

      <div className="blog1-exclusive">
        <p>#1 &nbsp; Exclusive</p>
      </div>

      <div className="blog1-content1">
        <p>
          Unlock a World of Culinary Luxury and Tranquil Moments & Much More.
        </p>
      </div>

      <div className="blog1-content2">
        <div className="blog1-content2-heading">
          <p>Newly Added</p>
        </div>

        <div className="moblie-blog1-carousel">
          <Carousel responsive={blogresponsive} infinite={true}>
            {blogproduct}
          </Carousel>
        </div>

        <div className="blog1-contentpart">
          <div className="blog1-first">
            <div className="blog1-first-text">
              <p>Mango Tango Fusion Salad:</p>
            </div>
            <img src={image1} alt="" />

            <div className="blog1-second-text">
              <p>
                {" "}
                Dive into a refreshing symphony of flavors with our Mango Tango
                Fusion Salad. Crisp mixed greens, juicy mango slices, and cherry
                tomatoes are tossed with a zesty mango-lime dressing, creating a
                burst of tropical goodness on your palate. Topped with grilled
                chicken for a protein boost and garnished with crunchy almond
                slivers
              </p>
            </div>
          </div>

          <div className="blog1-second">
            <div className="blog1-first-text">
              <p>Spiced Infusion Sea Bass:</p>
            </div>
            <img src={image2} alt="" />
            <div className="blog1-second-text">
              <p>
                {" "}
                Immerse yourself in the bold and aromatic notes of our Spiced
                Infusion Sea Bass. Fresh fillets of sea bass are delicately
                seasoned with a blend of Indian spices, including cumin,
                coriander, and turmeric, then seared to perfection. Served on a
                bed of saffron-infused basmati rice and accompanied by a side of
                mint-cilantro chutney, this dish is a celebration of coastal
                flavors with a touch of Indian flair.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="blog1-content3">
        <p id="blog1-content3-heading">
          Become a Sunset Insider: Join Our Exclusive Community
        </p>
        <ul id="blog1-content3-text1">
          <li>
            Newsletter: Subscribe to our newsletter for sneak peeks, exclusive
            recipes, and members-only offers.
          </li>
          <li>
            Sunset Insider Club: Unlock premium benefits by becoming a part of
            our exclusive membership program.
          </li>
        </ul>

        <p id="blog1-content3-text2">
          <li>
            {" "}
            Indulge in the Extraordinary. Reserve Your Seat for an Exclusive
            Culinary Soiree at Café Sunset.
          </li>
        </p>
      </div>

      <div className="blog1-content4">
        <p id="blog1-content4-text1">Limited-Time Exclusive Events:</p>

        <ul id="blog1-content4-text2">
          <li>
            {" "}
            Sunset Symphony Night: An evening of live music, exclusive dishes,
            and a curated selection of wines. Limited seats available. Reserve
            now. Chef's Table Experience: Join our head chef for an intimate
            dining experience featuring a specially crafted menu. Limited to a
            select few connoisseurs.
          </li>
          <li>
            {" "}
            Chef's Table Experience: Join our head chef for an intimate dining
            experience featuring a specially crafted menu. Limited to a select
            few connoisseurs.{" "}
          </li>
        </ul>
      </div>

      <div className="blog1-content5">
        <p id="blog1-content5-text1">WHERE WE’VE BEEN FEATURED</p>

        <div className="context5-img">
          <div class="context5-img1">
            <img src={image3} alt="" />
          </div>

          <div class="context5-img2">
            <img src={image4} alt="" />
          </div>

          <div class="context5-img3">
            <img src={image5} alt="" />
          </div>

          <div class="context5-img4">
            <img src={image6} alt="" />
          </div>
        </div>
      </div>

      <div className="blog1-content5-show">
        <span onClick={togglecontent5}>
          {" "}
          <FaChevronDown />{" "}
        </span>
      </div>

      {showcontent5 && (

        <div className="blog1-content5-mobile">

          <p id="blog1-content5-mobile-text1">WHERE WE’VE BEEN FEATURED</p>

          <div className="context5-mobile-img">

            <div className="context5-mobile-img1">
              <img src={image3} alt="" />
            </div>

            <div className="context5-mobile-img2">
              <img src={image4} alt="" />
            </div>

            <div className="context5-mobile-img3">
              <img src={image5} alt="" />
            </div>

            <div className="context5-mobile-img4">
              <img src={image6} alt="" />
            </div>
          </div>

        </div>

      )}

      <Footer />
    </div>
  );
};

export default Blog1;
