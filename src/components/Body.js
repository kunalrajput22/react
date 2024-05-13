import React from "react";
import { resList } from "../App";
import { RestaurantCard } from "./RestaurantCard";

export function Body({ names, children, resName }) {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* <RestaurantCard resData={resList[0]} />
            <RestaurantCard resData={resList[1]} />
            <RestaurantCard resData={resList[2]} />
            <RestaurantCard resData={resList[3]} />
            <RestaurantCard resData={resList[4]} /> */}
        {/* <RestaurantCard resData={resList} /> */}
        {/* <RestaurantCard
              resName="La Pinoz"
              cuisines="Momos, Garlic bread"
              ratings="4.4"
              prepTime="18 minutes"
            /> */}
        {resList.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.data.id} />
        ))}
      </div>
    </div>
  );
}
