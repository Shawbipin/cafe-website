import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";


const footer = () => {

  return (

    <div>

      <div className="footer">
        <div className="footer-section-1">
          <div className="Address">
            <h2>Address</h2>
            <p>Cafe </p>
            <p> Plot No. 45, </p>
            <p> Street No.14 </p>
            <p> Marol MIDC Industry Estate,</p>
            <p> Andheri East,</p>
            <p> Mumbai-400093</p>
          </div>

          <div className="Help">
            <h2>Help & Info</h2>
            <p>About Cafe</p>
            <p> Careers </p>
            <Link to="/faq">
              {" "}
              <p>FAQs</p>{" "}
            </Link>
          </div>

          <div className="Contact">
            <h2>Contact Us</h2>

            <p> 1809-908-5647</p>
            <p> Get in Touch</p>
            <p>Cgat With Us </p>
          </div>

          <div className="Useful">
            <h2> Useful </h2>
            <p>
              Privacy Policy Terms of Service Payment Issues Net Banking Custom
              Order
            </p>
          </div>
        </div>

       
        <div className="footer-section-2">
          <h2>Follow Us on :</h2>
          <span id="social-icon">
            <FaFacebookF />
          </span>
          <span>
            <FaInstagram />
          </span>
          <span>
            <FaXTwitter />
          </span>
          <span>
            <FaWhatsapp />
          </span>
        </div>
      </div>

      <div className="copyright">
        <p>@2023 Railworld India. All Rights Reserved</p>
      </div>

    </div>

  );
};

export default footer;




