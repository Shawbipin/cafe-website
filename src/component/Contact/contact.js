import React from "react";
import "./contact.css";

import Navbarnew from "../navbar/Navbarnew";
import Footer from "../Footer/footer";

import image1 from "../../asset/Address.jpg";
import image2 from "../../asset/Contact.jpg";
import image3 from "../../asset/Email.jpg";


const contact = () => {


  return (
    
    <div className="contact-bg">
      <Navbarnew />

      <div className="contact-content-1">
        <p>
          “Your thoughts matter to us, so drop us a line and let's start a
          conversation today."
        </p>
      </div>

      <div className="contact-content-2">
      
        <div className="add-part">
          <img src={image1} alt="" />
          <p id="add-part-text-1">Address</p>
          <p id="add-part-text-2">
            MFC Center, Railway Station, Amazing Hotel, near Raipur, Raipur,
            Chhattisgarh 492001
          </p>
        </div>

        <div className="email-part">
          <img src={image2} alt="" />
          <p id="email-part-text-1">Email</p>
          <p id="email-part-text-2">sunset@gmail.com</p>
        </div>

        <div className="phone-part">
          <img src={image3} alt="" />
          <p id="phone-part-text-1">Conatct no.</p>
          <p id="phone-part-text-2">+91-6254777844</p>
        </div>
      </div>


      <div className="contact-content-3">
        <p>Contact Us</p>

        <div className="contact-name">
          <div className="contact-firstname">
            <label for="fname">
              First Name: <br />
              <input type="text" id="fname" name="fname" />
            </label>
          </div>

          <div className="contact-lastname">
            <label for="fname">
              Last Name: <br />
              <input type="text" id="fname" name="fname" />
            </label>
          </div>
        </div>

        <div className="contact-add">
          <div className="contact-number">
            <label >
              Contact Number: <br />
              <input type="text" />
            </label>
          </div>
          <div className="contact-email">
            <label >
              Last Name: <br />
              <input type="text"   />
            </label>
          </div>
        </div>

        <input
          type="text"
          id="contact-message-input"
          placeholder="your message for us....."
        /> 

        <button>Submit</button>
      </div>

      <Footer />

    </div>
  );
};

export default contact;


