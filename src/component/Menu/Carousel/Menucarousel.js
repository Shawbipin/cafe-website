
import React from 'react'
import { CarouselproductData, Carouselresponsive } from "./Carouseldata";
import Carouselproduct from "./Carouselproduct";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const Menucarousel = () => {
    const CarouselProduct = CarouselproductData.map((item) => (
        <Carouselproduct name={item.name} text={item.text} link={item.link} />
      ));
  return (
    <div>
            <Carousel responsive={Carouselresponsive}>{CarouselProduct}</Carousel>

    </div>
  )
}

export default Menucarousel;



