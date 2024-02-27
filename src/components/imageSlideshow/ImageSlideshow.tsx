import React, { useEffect, useState } from "react";

import classes from "./image-slideshow.module.css";

import burgerImg from "../../assets/images/burger.jpg";
import curryImg from "../../assets/images/curry.jpg";
import dumplingsImg from "../../assets/images/dumplings.jpg";
import marcheseImg from "../../assets/images/marchese.jpg";
import pizzaImg from "../../assets/images/pizza.jpg";
import schnitzelImg from "../../assets/images/schnitzel.jpg";
import tomatoSaladImg from "../../assets/images/tomato-salad.jpg";

export const ImageSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    { image: burgerImg, alt: "A delicious, juicy burger" },
    { image: curryImg, alt: "A delicious, spicy curry" },
    { image: dumplingsImg, alt: "Steamed dumplings" },
    { image: marcheseImg, alt: "Mac and cheese" },
    { image: pizzaImg, alt: "A delicious pizza" },
    { image: schnitzelImg, alt: "A delicious schnitzel" },
    { image: tomatoSaladImg, alt: "A delicious tomato salad" },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevImageIndex) =>
        prevImageIndex < images.length - 1 ? prevImageIndex + 1 : 0
      );
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [images.length]);
  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <img
          className={index === currentImageIndex ? classes.active : ""}
          src={image.image}
          alt={image.alt}
        />
      ))}
    </div>
  );
};
