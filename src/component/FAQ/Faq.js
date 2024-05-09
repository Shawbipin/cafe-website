import React from "react";
import "./faq.css";

import Navbarnew from "../navbar/Navbarnew";
import Footer from "../Footer/footer";

const Faq = () => {
  return (
    <div className="faq-bg">
      <Navbarnew />

      <p id="faqs-text1">FAQs</p>

      <div className="faq-content-1">
        <p id="faq-content-1-text1">All</p>
        <p id="faq-content-1-text2">Family</p>
        <p id="faq-content-1-text3">Comady Podcast</p>
        <p id="faq-content-1-text4">Offers</p>
      </div>

      <div className="faq-content-2">
        <p id="faq-content-2-text1">Community</p>
        <p id="faq-content-2-text2">Events</p>
        <p id="faq-content-2-text3">Food & Drinks</p>
      </div>
      <p id="faq-content-3-text1">Beer</p>
      <p id="faq-content-3-text2">
        Hi there! Just wondering, do you happen to serve beer at your cafe?
        Thanks!
      </p>
      <p id="faq-content-3-text3">
        "Thank you for reaching out! At the moment, we're proud to be a
        family-friendly cafe, so we don't serve alcohol. However, we have a
        delightful selection of beverages and treats to enjoy. Let us know if
        there's anything else we can assist you with!"
      </p>
      <Footer />
    </div>
  );
};

export default Faq;
