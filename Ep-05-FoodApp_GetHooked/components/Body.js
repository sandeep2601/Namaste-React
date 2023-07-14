import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/restaurants.json";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            restaurantData={restaurant.info}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
