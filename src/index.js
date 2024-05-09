import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { BrowserRouter } from 'react-router-dom';
import Gototop from "./component/Gototop/Gototop";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Gototop />
    <App />
  </React.StrictMode>
);



