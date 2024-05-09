import React, { useState } from "react";
import "./Blog2.css";

import Newnavbar from "../../navbar/Newnavbar";
import Footer from "../../Footer/footer";
import { FaChevronDown } from "react-icons/fa";

import image1 from "../../../asset/morning.jpg";
import image2 from "../../../asset/salad.jpeg";

const Blog2 = () => {
  const [showcontent5, setshowcontent5] = useState(false);

  const togglecontent5 = () => {
    setshowcontent5(!showcontent5);
  };

  return (
    <div className="blog-2-bg">
      <Newnavbar />

      <div className="blog2-content1">
        <span>#2 </span>
        <p>
          {" "}
          "Café Sunset Chronicles: <br /> A Journey Through Flavors and Moments"
        </p>
      </div>

      <div className="blog2-content2">
        <p>
          Welcome to the vibrant tapestry of Café Sunset, where every cup tells
          a story, and every moment is a cherished chapter in our culinary
          odyssey. Join us as we embark on a captivating journey, unveiling the
          essence of Café Sunset through its diverse flavors and unforgettable
          moments
        </p>
      </div>

      <div className="blog2-content3">
        <p id="content3-text1">Morning Prelude: Awakening the Senses.</p>

        <p id="content3-text2">
          As dawn breaks, Café Sunset comes alive with the Morning Prelude – a
          symphony of aromas and flavors that greet you with warmth and
          vitality. The Sunrise Espresso takes center stage, a robust elixir
          that awakens your senses, setting the stage for a day filled with
          culinary delights. Paired with a selection of freshly baked pastries,
          the morning at Café Sunset is a sweet beginning to your journey.
        </p>

        <img src={image1} alt="" />
      </div>

      <div className="blog2-content4">
        <img src={image2} alt="" />
        <p id="content4-text1">Culinary Odyssey: Seasons on a Plate</p>

        <p id="content4-text2">
          The heart of Café Sunset lies in its culinary offerings, a true
          odyssey through the seasons. Our chefs curate a culinary symphony with
          seasonal specialties that capture the essence of each moment. From
          light and refreshing summer salads to hearty and comforting winter
          stews, each dish is a celebration of local flavors and innovation. Be
          sure to explore our daily specials.
        </p>
      </div>

      <div className="blog2-content5">
        <p>
          The sun may set, but the flavors linger, inviting you to return and
          continue your exploration of the rich tapestry of Café Sunset – a
          journey through flavors and moments that linger long after you've left
          our doors.
        </p>
      </div>

      <div className="blog2-content5-show">
        <span onClick={togglecontent5}>
          {" "}
          <FaChevronDown />
          {" "}
        </span>
      </div>

      {showcontent5 && (
        <div className="blog2-mobile-content5">
          <p>
            The sun may set, but the flavors linger, inviting you to return and
            continue your exploration of the rich tapestry of Café Sunset – a
            journey through flavors and moments that linger long after you've
            left our doors.
          </p>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Blog2;
