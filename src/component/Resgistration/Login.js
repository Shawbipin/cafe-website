import React from "react";
import "./Login.css";

import Newnavbar from "../navbar/Newnavbar";
import Footer from "../Footer/footer";
import { Link } from "react-router-dom";

import image1 from "../../asset/login-img.png";

const Login = () => {
  return (
    <div>

      <div className="navbar-bg-black">
        <Newnavbar />
      </div>

      <p id="main-heading">Log In</p>

      <div className="main-login">
        <p id="login-1-text">Log in to your Account</p>

        <div className="reg-login-section">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <Link to="/forget">
            <p id="login-2-text">Forgot Password ?</p>
          </Link>
          <button>Submit</button>
        </div>

       
        
      </div>

      <div className="login-img">
        <img src={image1} alt="img" />
      </div>

      <Footer />
    </div>
  );
};

export default Login;
