import React, { useEffect } from "react";
import { resList } from "../utils/mockData";
import { RestaurantCard } from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";

export function Body({ names, children, resName }) {
  // normal js variable
  let listOfRestaurantsJS = [
    {
      data: {
        id: "12163",
        name: "Kannur Food Point",
        cloudinaryImageId: "bmwn4n4bn6n1tcpc8x2h",
        cuisines: ["Kerala", "Chinese"],
        costForTwo: 30000,
        deliveryTime: 24,
        avgRating: 3.8,
      },
    },
    {
      data: {
        id: "121603",
        name: "Dominos",
        cloudinaryImageId: "bmwn4n4bn6n1tcpc8x2h",
        cuisines: ["Burger", "Chinese"],
        costForTwo: 30000,
        deliveryTime: 32,
        avgRating: 4.5,
      },
    },
    {
      data: {
        id: "12160322",
        name: "MAcD",
        cloudinaryImageId: "bmwn4n4bn6n1tcpc8x2h",
        cuisines: ["Burger", "Chinese"],
        costForTwo: 30000,
        deliveryTime: 32,
        avgRating: 4.1,
      },
    },
  ];

  //state-variable - super powerfuil variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      " https://www.swiggy.com/mapi/homepage/getCards?lat=29.0219927&lng=77.7709558"
    );

    const json = await data.json();
    console.log(
      json?.data?.success?.cards[4]?.gridWidget?.gridElements.infoWithStyle
        .restaurants
    );
    setListOfRestaurants(
      json?.data?.success?.cards[4]?.gridWidget?.gridElements.infoWithStyle
        .restaurants
    );
    setFilteredRestaurants(
      json?.data?.success?.cards[4]?.gridWidget?.gridElements.infoWithStyle
        .restaurants
    );
  };

  function OnsetListOfRestaurants() {
    setListOfRestaurants(
      listOfRestaurants.filter((res) => res.info.avgRating > 4)
    );
  }

  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search Here"
            className="search-input"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              // console.log(searchText);
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              console.log(filteredRestaurants);
              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            // const filteredList = listOfRestaurants.filter(
            //   (res) => res.data.avgRating > 4
            // );
            // setListOfRestaurants(filteredList);
            // console.log(listOfRestaurants);
            OnsetListOfRestaurants();
          }}
        >
          Top rated restaurants
        </button>
      </div>
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
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
}
