import image8 from "../../asset/slide-1.jpg";
import image9 from "../../asset/COMBO PEPSI 2.png";
import image10 from "../../asset/slide-2.jpg";


// import { HiArrowLongRight } from "react-icons/hi2";


export const responsivemenu = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 800 },
    items: 3,
    slidesToSlide: 1,
  },
   // desktop: {
   // breakpoint: { max: 1024, min: 800 },
   // items: 2,
   //  },
  tablet: {
    breakpoint: { max: 800, min: 425 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 425, min: 0 },
    items: 3,
  },
};



export const productDatamenu = [
  {
    id: 1,
    imageurl: image8,
    
  },
  {
    id: 2,
    imageurl: image9,
    // className: 'second-slide' 
   
  },
  {
    id: 3,
    imageurl: image10,
   
  },
  {
    id: 4,
    imageurl: image8,
   
  },
  {
    id: 5,
    imageurl: image9,
    
  },
  {
    id: 6,
    imageurl: image10,
   
  },

  {
    id: 7,
    imageurl: image8,
    
  },
  {
    id: 8,
    imageurl: image9,
   
  },
];
