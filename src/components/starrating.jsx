import React, { useState } from "react";

const StarRating = ({ rating }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        if (index < Math.round(rating)) {
          return (
            <span
              className="star"
              style={{ marginRight: "5px", color: "orange" }}
            >
              &#9733;
            </span>
          );
        } else {
          return (
            <span
              className="star"
              style={{ marginRight: "5px", color: "lightgrey" }}
            >
              &#9733;
            </span>
          );
        }
      })}
    </div>
  );
};

export default StarRating;
