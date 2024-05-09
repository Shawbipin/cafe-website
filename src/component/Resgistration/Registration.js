import React from "react";
import "./Registration.css";

import Newnavbar from "../navbar/Newnavbar";
import Footer from "../Footer/footer";
import { Link } from "react-router-dom";

const Registration = () => {

  return (
    <div className="regis-bg">
   
      <div className="newnavbar-style">
        <Newnavbar />
      </div>

      <h2 id="regis-heding">Register</h2>

      <div className="form-container">
        <h6 id="form-heading">Signup now and get full access to our app.</h6>

        <div className="input-section">
          <input type="text" placeholder="Firstname" />
          <input type="text" placeholder="Lastname" />
          <input type="text" placeholder="Email" id="extra-space" />
          <input type="text" placeholder="Password" id="extra-space" />
          <input type="text" placeholder="Confirm Password" id="extra-space" />

          <button>Submit</button>
        </div>

        <div className="already-login">
          <p>Already have an Acount ?</p>
          <Link to="/login">
            <button>Sign in</button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Registration;




