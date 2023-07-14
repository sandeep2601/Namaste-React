import { CDN_RESTAURANT_LOGO_URL } from "../utils/constants";

const RestaurantCard = ({ restaurantData }) => {
  const { name, cloudinaryImageId, cuisines, avgRating, sla } = restaurantData;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="restaurant logo"
        src={CDN_RESTAURANT_LOGO_URL + cloudinaryImageId}
      />
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
