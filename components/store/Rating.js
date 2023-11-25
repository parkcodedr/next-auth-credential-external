"use client";
import React, { useState } from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { Rating } from "react-simple-star-rating";

function RatingStar() {
  const [ratingValue, setRatingValue] = useState(0);

  const handleRating = (rate) => {
    setRatingValue(rate);
  };
  return <Rating transition  />;
}

export default RatingStar;
