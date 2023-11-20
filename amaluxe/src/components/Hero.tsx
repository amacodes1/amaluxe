"use client";

import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";

export default function Hero() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  const slideData = [
    {
      id: 0,
      img: "https://img.freepik.com/premium-photo/female-hands-holds-handbag-blue-background-flat-lay-top-view-spring-fashion-concept-pastel-colored_479776-670.jpg",
      title: "Trending Items",
      desc: "WOMEN'S LATEST FASHION SALE",
      price: "15",
    },

    {
      id: 1,
      img: "https://img.freepik.com/premium-photo/female-hands-holds-handbag-blue-background-flat-lay-top-view-spring-fashion-concept-pastel-colored_479776-670.jpg",
      title: "Trending Items",
      desc: "MEN'S FOOTWEAR",
      price: "20",
    },

    {
      id: 2,
      img: "https://img.freepik.com/premium-photo/female-hands-holds-handbag-blue-background-flat-lay-top-view-spring-fashion-concept-pastel-colored_479776-670.jpg",
      title: "Sales Offer",
      desc: "NEW FASHION SUMMER SALES",
      price: "30",
    },
  ];

  return (
    <div>
      <div className="container pt-6 lg:pt-0">
        <Slider {...settings}>
          {slideData.map((item: any) => (
            <Slide
              key={item.id}
              img={item.img}
              title={item.title}
              desc={item.desc}
              price={item.price}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}
