

import image1 from "../../../asset/Review IMages (1).jpg";
import image2 from "../../../asset/Review IMages (2).jpg";
import image3 from "../../../asset/Review IMages (3).jpg";
import image4 from "../../../asset/Review IMages (4).jpg"
import { BiSolidStarHalf } from "react-icons/bi";



import { FaStar } from "react-icons/fa";




export const blog1responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 800 },
    items: 4,
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



export const blog1ProductData = [
  {
    id: 1,
    imageurl: image1,
    icon: <span>{<FaStar />} {<FaStar />} {<FaStar />} {<FaStar />} {<FaStar />}</span> ,
    description: "Café Sunset is a hidden gem! The flavors are absolutely exquisite, and the cozy atmosphere makes it the perfect spot for a quiet coffee or a lively gathering. The Sunset Chai is a must-try! Can't wait to visit again. - Divya Soni.",
  },
  {
    id: 2,
    imageurl: image2,
    icon: <span>{<FaStar />} {<FaStar />} {<FaStar />} {<FaStar />} {<BiSolidStarHalf /> }</span> ,
    description: "The staff at Café Sunset goes above and beyond to make you feel at home. The artistic vibes, from the décor to the live performances, create a unique and memorable experience. Highly recommended! - Sanowar Khatun." 
   },
  {
    id: 3,
    imageurl: image3,
    icon: <span>{<FaStar />} {<FaStar />} {<FaStar />} {<FaStar />} {<BiSolidStarHalf />}</span> ,
    description:"Its Was Very Delicious.",
  },
  {
    id: 4,
    imageurl: image4,
    icon: <span>{<FaStar />} {<FaStar />} {<FaStar />} {<FaStar />} {<BiSolidStarHalf />}</span> ,
    description:"The simplicity of the dishes lets the quality of the noodles shine through.A must-visit for any noodle lover! - Ayusha.",
  },
  {
    id: 5,
    imageurl: image1,
    icon: <span>{<FaStar />} {<FaStar />} {<FaStar />} {<FaStar />} {<FaStar />}</span> ,
    description: "Café Sunset is a hidden gem! The flavors are absolutely exquisite, and the cozy atmosphere makes it the perfect spot for a quiet coffee or a lively gathering. The Sunset Chai is a must-try! Can't wait to visit again. - Divya Soni.",
  },
  {
    id: 6,
    imageurl: image2,
    icon: <span>{<FaStar />} {<FaStar />} {<FaStar />} {<FaStar />} {<BiSolidStarHalf />}</span> ,
    description: "The staff at Café Sunset goes above and beyond to make you feel at home. The artistic vibes, from the décor to the live performances, create a unique and memorable experience. Highly recommended! - Sanowar Khatun." 
   },
  {
    id: 7,
    imageurl: image3,
    icon: <span>{<FaStar />} {<FaStar />} {<FaStar />} {<FaStar />} {<BiSolidStarHalf /> }</span> ,
    description:"Its Was Very Delicious.",
  },
  {
    id: 8,
    imageurl: image4,
    icon: <span>{<FaStar />} {<FaStar />} {<FaStar />} {<FaStar />} {<BiSolidStarHalf />}</span> ,
    description:"The simplicity of the dishes lets the quality of the noodles shine through.A must-visit for any noodle lover! - Ayusha.",
  },
];
