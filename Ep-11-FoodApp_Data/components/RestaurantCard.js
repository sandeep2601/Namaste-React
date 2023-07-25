import { useContext } from "react";
import { CDN_RESTAURANT_LOGO_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({ restaurantData }) => {
  const { name, cloudinaryImageId, cuisines, avgRating, sla } = restaurantData;
  const userData = useContext(UserContext);
  return (
    <div className="m-1 p-1 w-64 h-100 bg-blue-100 rounded-lg hover:bg-blue-300 cursor-pointer">
      <img
        className="w-full rounded-md"
        alt="restaurant logo"
        src={CDN_RESTAURANT_LOGO_URL + cloudinaryImageId}
      />
      <h2 className="font-bold py-2 text-lg">{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.deliveryTime} minutes</h4>
      <h4>User: {userData.loggedInUser}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white rounded-lg m-2 p-2">
          Promoted
        </label>
        <RestaurantCard restaurantData={props.restaurantData} />
      </div>
    );
  };
};

export default RestaurantCard;
