"use client";
import React from "react";
import ReviewCard from "./ReviewCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { clientReviews } from "../../Data/data";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
const ReviewSlider = () => {
  return (
    <Carousel
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      infinite
      responsive={responsive}
    >
      {clientReviews.map((review) => {
        return (
          <div className="slider" key={review.image}>
            <ReviewCard review={review} />
          </div>
        );
      })}
    </Carousel>
  );
};

export default ReviewSlider;
