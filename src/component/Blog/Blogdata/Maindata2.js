

import { Link } from "react-router-dom";
import image1 from "../../../asset/Blog Thumbnail (1).jpg";
import image2 from "../../../asset/Blog Thumbnail (2).jpg";
import image3 from "../../../asset/Blog Thumbnail (3).jpg";
import image4 from "../../../asset/Blog Thumbnail (4).jpg";
import image5 from "../../../asset/Blog Thumbnail (5).jpg";
import image6 from "../../../asset/Blog Thumbnail (6).jpg";








export const blog2responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 800 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 800, min: 425 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 425, min: 0 },
    items: 1,
  },
};



export const blog2ProductData = [
  {
    id: 1,
    imageurl: image1,
    text: "Sip, &nbsp; Savor, &nbsp; Socialize: The Three S's of Cafe Sunset",
    description:  <Link to="/blog-1">"Found out More."</Link> 
  },
  {
    id: 2,
    imageurl: image2,
    text:"Café Sunset Chronicles: A Journey Through Flavors and Moments.",
    description: <Link to="/blog-2">"Found out More."</Link> 
   },
  {
    id: 3,
    imageurl: image3,
    text:"Sunset Sessions: Live Music, Lively Conversation at Cafe Sunset",
    description:  <Link to="/blog-3">"Found out More."</Link> 
  },
  {
    id: 4,
    imageurl: image4,
    text:"Sipping serenity: The Art of Sunset at Cafe Sunset",
    description:  <Link to="/blog-4">"Found out More."</Link> 
  },
  {
    id: 5,
    imageurl: image5,
    text:"Bites of Bliss: The Sweet Symphony of Pastries at Cafe Sunset",
    description:  <Link to="/blog-5">"Found out More."</Link>  
  },
  {
    id: 6,
    imageurl: image6,
    text:"Flavorful Escapes: Exploring Cafe Sunset's Seasonal Specialties.",
    description:  <Link to="/blog-6">"Found out More."</Link> 
   },
];


