

import image1 from "../../../asset/sala.jpg";
import image2 from "../../../asset/infusion.jpg";


export const blogresponsive = {
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
    items: 1,
  },
};


export const blogproductData = [
  {
    id: 1,
    text: "Mango Tango Fusion Salad:",
    imageurl: image1,
    description:
        " Dive into a refreshing symphony of flavors with our Mango Tango Fusion Salad. Crisp mixed greens, juicy mango slices, and cherry tomatoes are tossed with a zesty mango-lime dressing, creating aburst of tropical goodness on your palate. Topped with grilled chicken for a protein boost and garnished with crunchy almond slivers"
},
  {
    id: 2,
    text: "Spiced Infusion Sea Bass:",
    imageurl: image2,
    description:
    " Immerse yourself in the bold and aromatic notes of our Spiced Infusion Sea Bass. Fresh fillets of sea bass are delicately seasoned with a blend of Indian spices, including cumin, coriander, and turmeric, then seared to perfection. Served on a bed of saffron-infused basmati rice and accompanied by a side of mint-cilantro chutney, this dish is a celebration of coastal flavors with a touch of Indian flair."
}
];


