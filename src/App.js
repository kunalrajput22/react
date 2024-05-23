import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { Body } from "./components/Body";
import About from "./components/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const resObj = {
  type: "restaurant",
  data: {
    type: "F",
    id: "121603",
    name: "Kannur Food Point",
    uuid: "51983905-e698-4e31-b0d7-e376eca56320",
    city: "1",
    area: "Tavarekere",
    totalRatingsString: "10000+ ratings",
    cloudinaryImageId: "bmwn4n4bn6n1tcpc8x2h",
    cuisines: ["Kerala", "Chinese"],
    tags: [],
    costForTwo: 30000,
    costForTwoString: "₹300 FOR TWO",
    deliveryTime: 24,
    minDeliveryTime: 24,
    maxDeliveryTime: 24,
    slaString: "24 MINS",
    lastMileTravel: 3,
    slugs: {
      restaurant: "kannur-food-point-btm",
      city: "bangalore",
    },
    cityState: "1",
    address:
      "6/21,9TH CROSS ,1ST MAIN, VENKATESHWARA LAYOUT,SG PALYA, BENGALURU, - 560093",
    locality: "SG Palya",
    parentId: 20974,
    unserviceable: false,
    veg: false,
    select: false,
    favorite: false,
    tradeCampaignHeaders: [],
    aggregatedDiscountInfo: {
      header: "50% off",
      shortDescriptionList: [
        {
          meta: "50% off on all orders",
          discountType: "Percentage",
          operationType: "RESTAURANT",
        },
      ],
      descriptionList: [
        {
          meta: "50% off on all orders",
          discountType: "Percentage",
          operationType: "RESTAURANT",
        },
      ],
      subHeader: "",
      headerType: 0,
      superFreedel: "",
    },
    aggregatedDiscountInfoV2: {
      header: "50% OFF",
      shortDescriptionList: [
        {
          meta: "",
          discountType: "Percentage",
          operationType: "RESTAURANT",
        },
      ],
      descriptionList: [
        {
          meta: "50% off on all orders",
          discountType: "Percentage",
          operationType: "RESTAURANT",
        },
      ],
      subHeader: "",
      headerType: 0,
      superFreedel: "",
    },
    ribbon: [
      {
        type: "PROMOTED",
      },
    ],
    chain: [],
    feeDetails: {
      fees: [
        {
          name: "distance",
          fee: 3700,
          message: "",
        },
        {
          name: "time",
          fee: 0,
          message: "",
        },
        {
          name: "special",
          fee: 0,
          message: "",
        },
      ],
      totalFees: 3700,
      message: "",
      title: "Delivery Charge",
      amount: "3700",
      icon: "",
    },
    availability: {
      opened: true,
      nextOpenMessage: "",
      nextCloseMessage: "",
    },
    longDistanceEnabled: 0,
    rainMode: "NONE",
    thirdPartyAddress: false,
    thirdPartyVendor: "",
    adTrackingID: "cid=6274849~p=1~eid=00000187-2c1c-96f0-0062-eea200b00103",
    badges: {
      imageBased: [],
      textBased: [],
      textExtendedBadges: [],
    },
    lastMileTravelString: "3 kms",
    hasSurge: false,
    sla: {
      restaurantId: "121603",
      deliveryTime: 24,
      minDeliveryTime: 24,
      maxDeliveryTime: 24,
      lastMileTravel: 3,
      lastMileDistance: 0,
      serviceability: "SERVICEABLE",
      rainMode: "NONE",
      longDistance: "NOT_LONG_DISTANCE",
      preferentialService: false,
      iconType: "EMPTY",
    },
    promoted: true,
    avgRating: "3.9",
    totalRatings: 10000,
    new: false,
  },
  subtype: "basic",
};

function AppLayout() {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
