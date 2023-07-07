import { required } from "nodemon/lib/config";
import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";

export const Landing = () => {
  const background: BannerLayer = {
    image:require("../assets/sky.jpg"),
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true
  };

  const headline: BannerLayer = {
    translateY: [0, 30],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="inset center">
        <p className="spacing">
        <h1 className="headline white">Hello World!</h1>
        <h3 className="white content">I am <b>Ankit Mishra</b></h3>
        </p>
       
      </div>
      
    )
  };

  const foreground: BannerLayer = {
    image:require("../assets/banner-foreground.png"),



    translateY: [0, 15],
    scale: [1, 1.1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true
  };

  const gradientOverlay: BannerLayer = {
    opacity: [0, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <div className="gradient inset" />
  };

  return (
    <ParallaxBanner
      layers={[background, headline, foreground, gradientOverlay]}
      className="full"
    />
  );
};


