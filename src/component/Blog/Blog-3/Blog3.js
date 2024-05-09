import React, { useState } from "react";
import "./Blog3.css";

import Newnavbar from "../../navbar/Newnavbar";
import Footer from "../../Footer/footer";

import image1 from "../../../asset/Sunset Singing events.jpeg";
import image2 from "../../../asset/Red Playful Illustration Comedy Podcast Cover.png";



const Blog3 = () => {
  const [showreach, setshowreach] = useState(false);

  const reachus = () => {
    setshowreach(!showreach);
  };

  return (
    <div className="blog-3-bg">
      <Newnavbar />

      <div className="blog3-content1">
        <span>#3</span>
        <p> Sunset Sessions: Live Music, Lively Conversations at Café Sunset</p>
      </div>

      <div className="blog3-content2">
        <p>
          Step into the magical realm of Café Sunset, where the Sunset Sessions
          unfold – an enchanting fusion of live music and lively conversations
          that elevates your dining experience to new heights. In this blog, we
          invite you to explore the rhythmic heartbeat of our café, where
          melodies mingle with flavors, creating an ambiance that resonates long
          after the last note fades away.
        </p>
      </div>

      <div className="blog3-content3">
        <img src={image1} alt="" />

        <p id="blog3-content3-text1">
          Harmony in the Air: Live Music Serenades.
        </p>
        <p id="blog3-content3-text2">
          As the sun begins its descent, Café Sunset transforms into a stage for
          Harmony in the Air. Our Sunset Sessions feature talented local
          musicians, whose soulful tunes set the perfect backdrop for an evening
          of relaxation and connection. From acoustic melodies to vibrant
          rhythms, each performance is a curated experience designed to enhance
          your dining pleasure.
        </p>
      </div>

      <div className="blog3-content4">
        <p id="blog3-content4-text1">
          Lively Conversations: Where Words Dance Like Notes & The Comedy
          Crescendo: Live Standup Performances.{" "}
        </p>
        <p id="blog3-content4-text2">
          Beyond the music, Café Sunset is a haven for Lively Conversations.
          Engage in meaningful dialogue with friends, family, or fellow patrons
          as you share the experience of live music. The ambiance encourages
          connection, turning each table into a stage for the lively exchange of
          ideas and laughter. Café Sunset becomes a space where words dance like
          notes, creating an atmosphere of camaraderie.
        </p>
        <img src={image2} alt="" />
      </div>

      

      <div className="blog3-mobile-content5" onClick={reachus}>
        <p id="blog3-mobile-content5-text1">
          Want to Perform for Us? Join the Sunset Stage!
        </p>

        <p id="blog3-mobile-content5-text2">How to Reach Us</p>
      </div>

      {showreach && (
        <div className="reachus-content">
          <p id="blog3-mobile-content5-text0">
            {" "}
            To express your interest in performing at Café Sunset, simply send
            an email to [sunsetperformance@gmail.com] with the following
            details:
          </p>

          <ul id="blog3-mobile-content5-text3">
            <li>Your name and a brief introduction</li>
            <li> Type of performance (musician, comedian, or other) </li>
            <li> Samples of your work (links, attachments, or portfolio)</li>
            <li> Preferred dates and times for performance</li>
          </ul>

          <p id="blog3-mobile-content5-text4">
            Our team will get back to you promptly to discuss potential
            opportunities and coordinate your performance on the Sunset Stage.
            We look forward to turning your talent into an integral part of the
            Café Sunset experience!
          </p>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Blog3;
