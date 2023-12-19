import React, { useState } from "react";

const StarRating = ({ totalStars, onRatingChange }) => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
    onRatingChange(selectedRating);
  };

  return (
    <div className="">
      {[...Array(totalStars)].map((_, index) => (
        <span
          className="text-7xl"
          key={index}
          onClick={() => handleStarClick(index + 1)}
          style={{
            cursor: "pointer",
            color: index + 1 <= rating ? "gold" : "gray",
          }}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default StarRating;
