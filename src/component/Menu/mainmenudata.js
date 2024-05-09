import image4 from "../../asset/salads.jpg";

import image5 from "../../asset/past.jpg";
import image6 from "../../asset/combo-4.png";

import image7 from "../../asset/burger.jpg";


export const mainmenuresponsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 800 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 800, min: 425 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 425, min: 0 },
    items: 3,
  },
};


export const mainmenuproductData = [

  {
    id: 1,
    imageurl: image4,
    text: "SALADS",
  },

  {
    id: 2,
    imageurl: image5,
    text: "DESSERTS / ICE-CREAM",
  },
  {
    id: 3,
    imageurl: image6,
    text: "VALUE COMBO",
  },
  {
    id: 4,
    imageurl: image7,
    text: "BURGER & SANDWICHES",
    
  },
  {
    id: 5,
    imageurl: image4,
    text: "SALADS",
  },
  {
    id: 6,
    imageurl: image5,
    text: "DESSERTS / ICE-CREAM",
  },
  {
    id: 7,
    imageurl: image6,
    text: "VALUE COMBO",
  },
  {
    id: 8,
    imageurl: image7,
    text: "BURGER & SANDWICHES",
  },
];


