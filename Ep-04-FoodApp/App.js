import React from "react";
import ReactDOM from "react-dom/client";
import restaurants from "./restaurants.json";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://png.pngtree.com/element_our/png_detail/20180913/food-point-logo-design-spoon-fork-and-pin-sign-logo-png_94919.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({ restaurantData }) => {
  console.log(restaurantData);
  const { name, cloudinaryImageId, cuisines, avgRating, sla } = restaurantData;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="restaurant logo"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard restaurantData={restaurants[0].info} />
        <RestaurantCard restaurantData={restaurants[1].info} />
        <RestaurantCard restaurantData={restaurants[2].info} />
        <RestaurantCard restaurantData={restaurants[3].info} />
        <RestaurantCard restaurantData={restaurants[4].info} />
        <RestaurantCard restaurantData={restaurants[5].info} />
        <RestaurantCard restaurantData={restaurants[6].info} />
        <RestaurantCard restaurantData={restaurants[7].info} />
        <RestaurantCard restaurantData={restaurants[8].info} />
        <RestaurantCard restaurantData={restaurants[9].info} />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
