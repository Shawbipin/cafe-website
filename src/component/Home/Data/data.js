import image3 from "../../../asset/Chai Infusion.jpg";
import image4 from "../../../asset/Sizzling Tandoori Platter.jpg";
import image5 from "../../../asset/Mango Curry.jpg";
import { HiArrowLongRight } from "react-icons/hi2";


export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 800 },
    items: 3,
    slidesToSlide: 2,
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
    items: 2,
  },
};


export const productData = [
  {
    id: 1,
    imageurl: image3,
    text: "Chai Infusion Dessert: Cardamom Chai Panna Cotta",
    description:
      "Experience the sweet finale of your meal with our Chai Infusion Dessert - Cardamom Chai Panna Cotta. This delectable creation melds the velvety smoothness of Italian panna cotta with the aromatic allure of Indian chai",
      footer: <span> Find out more {<HiArrowLongRight />}</span>,

  },
  {
    id: 2,
    imageurl: image4,
    text: "Sizzling Tandoori Platter: A Feast for the Senses",
    description:
      "Transport your taste buds to the streets of India with our Sizzling Tandoori Platter. Succulent morsels of marinated chicken, paneer, and lamb are grilled to perfection in our traditional tandoor, imparting a smoky flavor and tender texture. Served with a side of mint chutney",
    footer: <span> Find out more {<HiArrowLongRight />}</span>,
  },
  {
    id: 3,
    imageurl: image5,
    text: "Mango Curry Chicken",
    description:
      "Indulge in the rich flavors of our Seasonal Spice Delight -Mango Curry Chicken. A symphony of succulent chicken pieces bathed in a luscious curry infused with the sweetness of ripe mangoes.",
    footer: <span> Find out more {<HiArrowLongRight />}</span>,
  },
  {
    id: 4,
    imageurl: image3,
    text: "Chai Infusion Dessert: Cardamom Chai Panna Cotta",
    description:
      "Experience the sweet finale of your meal with our Chai Infusion Dessert - Cardamom Chai Panna Cotta. This delectable creation melds the velvety smoothness of Italian panna cotta with the aromatic allure of Indian chai",
    footer: <span> Find out more {<HiArrowLongRight />}</span>,
  },
  {
    id: 5,
    imageurl: image4,
    text: "Sizzling Tandoori Platter: A Feast for the Senses",
    description:
      "Transport your taste buds to the streets of India with our Sizzling Tandoori Platter. Succulent morsels of marinated chicken, paneer, and lamb are grilled to perfection in our traditional tandoor, imparting a smoky flavor and tender texture. Served with a side of mint chutney",
    footer: <span> Find out more {<HiArrowLongRight />}</span>,
  },
  {
    id: 6,
    imageurl: image5,
    text: "Mango Curry Chicken",
    description:
      "Indulge in the rich flavors of our Seasonal Spice Delight -Mango Curry Chicken. A symphony of succulent chicken pieces bathed in a luscious curry infused with the sweetness of ripe mangoes.",
    footer: <span> Find out more {<HiArrowLongRight />}</span>,
  },

  {
    id: 7,
    imageurl: image3,
    text:"Chai Infusion Dessert: Cardamom Chai Panna Cotta",
    description:"Experience the sweet finale of your meal with our Chai Infusion Dessert - Cardamom Chai Panna Cotta. This delectable creation melds the velvety smoothness of Italian panna cotta with the aromatic allure of Indian chai",
    footer: <span> Find out more {<HiArrowLongRight />}</span>,
  },
  {
    id: 8,
    imageurl: image5,
    text: "Mango Curry Chicken",
    description:
      "Indulge in the rich flavors of our Seasonal Spice Delight -Mango Curry Chicken. A symphony of succulent chicken pieces bathed in a luscious curry infused with the sweetness of ripe mangoes.",
    footer: <span> Find out more {<HiArrowLongRight />}</span>,
  },
];
