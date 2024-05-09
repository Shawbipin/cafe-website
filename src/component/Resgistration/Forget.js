import React from "react";
import "./Forget.css";

import Newnavbar from "../navbar/Newnavbar";
import Footer from "../Footer/footer";
import { Link } from "react-router-dom";
import image1 from "../../asset/forget.png";

const Forget = () => {
  return (
    <div>
      
      <div className="navbar-bg-black">
        <Newnavbar />
      </div>

      <p id="forget-heading">Forgot Password?</p>

      <div className="forget-content">
        <div className="forget-img">
          <img src={image1} alt="" />
        </div>

        <div className="forget-section">
          <p id="forget-1-text">
            Enter the Email address associated with your account to get a code.
          </p>
          <input type="text" placeholder="Enter email address" />
          <button>Send code</button>

          <Link to="/login">
            <p id="forget-2-text">Back to login</p>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Forget;
