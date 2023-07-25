import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import { SWIGGY_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const onlineStatus = useOnlineStatus();

  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(SWIGGY_API_URL);
    const result = await response.json();
    const restaurantData =
      result?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(restaurantData);
    setFilteredRestaurants(restaurantData);
  };

  const { loggedInUser, setLoggedUser } = useContext(UserContext);

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline, please check your internet connection...
      </h1>
    );

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div>
      <div className="flex m-2">
        <div>
          <input
            className="border border-solid"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="m-2 px-4 border border-solid rounded-md bg-lime-200"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter(
                (restaurant) =>
                  restaurant.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="m-2 px-4 border border-solid rounded-lg bg-pink-100"
          onClick={() => {
            const filteredRestaurants = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            setListOfRestaurants(filteredRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
        <div className="m-2 px-4">
          Change LoggedIn User Name: &nbsp;
          <input
            className="border border-solid pl-1"
            type="text"
            value={loggedInUser}
            onChange={(e) => setLoggedUser(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <PromotedRestaurantCard restaurantData={restaurant.info} />
            ) : (
              <RestaurantCard restaurantData={restaurant.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
