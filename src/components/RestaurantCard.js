import React from "react";

export function RestaurantCard({ resName, ratings, prepTime, resData }) {
  const {
    cloudinaryImageId,
    name,
    costForTwo,
    deliveryTime,
    cuisines,
    avgRating,
  } = resData?.data;
  return (
    <div className="res-card" style={{ backgroundColor: "#ffd1cf" }}>
      <img
        className="res-card-img"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" +
          cloudinaryImageId
        }
        alt="food-image"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>Rs. {costForTwo / 100} for two </h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
}
