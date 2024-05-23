import React from "react";
import { CDN_URL } from "../utils/constants";

export function RestaurantCard({ resName, ratings, prepTime, resData }) {
  const { cloudinaryImageId, name, costForTwo, sla, cuisines, avgRating } =
    resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#eae1e1" }}>
      <img
        className="res-card-img"
        src={CDN_URL + cloudinaryImageId}
        alt="food-image"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo} </h4>
      <h4>{sla?.slaString} </h4>
    </div>
  );
}
