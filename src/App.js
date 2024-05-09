import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./component/Home/home";

import Mainmenu from "./component/Menu/mainmenu";
import About from "./component/About/About";
import Contact from "./component/Contact/contact";
import Menu from "./component/Menu/menu";

import Menu1 from "./component/Menu/Menu-1/Menu-1";
import Menu2 from "./component/Menu/Menu-2/Menu-2";
import Menu3 from "./component/Menu/Menu-3/Menu-3";
import Menu4 from "./component/Menu/Menu-4/Menu-4";
import Menu5 from "./component/Menu/Menu-5/Menu-5";
import Menu6 from "./component/Menu/Menu-6/Menu-6";
import Menu7 from "./component/Menu/Menu-7/Menu-7";
import Menu8 from "./component/Menu/Menu-8/Menu-8";

import Registration from "./component/Resgistration/Registration";
import Login from "./component/Resgistration/Login";
import Forget from "./component/Resgistration/Forget";

import Blog1 from "./component/Blog/Blog-1/Blog1";
import Blog2 from "./component/Blog/Blog-2/Blog2";
import Blog3 from "./component/Blog/Blog-3/Blog3";
import Blog4 from "./component/Blog/Blog-4/Blog4";
import Blog5 from "./component/Blog/Blog-5/Blog5";
import Blog6 from "./component/Blog/Blog-6/Blog6";

import Mainblog from "./component/Blog/Mainblog";
import Cart from "./component/Cart/Cart";
import Account from "./component/Account/Account";
import Accountinfo from "./component/Account/Accountinfo";
import Faq from "./component/FAQ/Faq";
import Yourorder from "./component/Yourorder/Yourorder";



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mainmenu" element={<Mainmenu />} />
          <Route path="/mainmenu/menus" element={<Menu />} />

          <Route path="/menu-1" element={<Menu1 />} />
          <Route path="/menu-2" element={<Menu2 />} />
          <Route path="/menu-3" element={<Menu3 />} />
          <Route path="/menu-4" element={<Menu4 />} />
          <Route path="/menu-5" element={<Menu5 />} />
          <Route path="/menu-6" element={<Menu6 />} />
          <Route path="/menu-7" element={<Menu7 />} />
          <Route path="/menu-8" element={<Menu8 />} />

          <Route path="/resitration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget" element={<Forget />} />

          <Route path="/about" element={<About />} />
          <Route path="/mainblog" element={<Mainblog />} />

          <Route path="/blog-1" element={<Blog1 />} />
          <Route path="/blog-2" element={<Blog2 />} />
          <Route path="/blog-3" element={<Blog3 />} />
          <Route path="/blog-4" element={<Blog4 />} />
          <Route path="/blog-5" element={<Blog5 />} />
          <Route path="/blog-6" element={<Blog6 />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Account />} />
          <Route path="/accountinfo" element={<Accountinfo />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/yourorder" element={<Yourorder />} />

          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
