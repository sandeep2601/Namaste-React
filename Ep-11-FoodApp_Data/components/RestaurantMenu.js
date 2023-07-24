import { useState } from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { restaurantId } = useParams();
  const restaurantInfo = useRestaurantMenu(restaurantId);

  if (restaurantInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    restaurantInfo?.cards[0]?.card?.card?.info;

  const categories =
    restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (data) => {
        if (
          data?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        ) {
          return data;
        }
      }
    );

  return (
    <div className="m-2 p-2 text-center">
      <h1 className="font-bold my-6 py-2 text-2xl">{name}</h1>
      <p className="text-lg font-bold">
        {cuisines.join(", ")}
        &nbsp;&nbsp; - &nbsp;&nbsp;
        {costForTwoMessage}
      </p>
      &nbsp;
      {categories?.map((item, index) => (
        <RestaurantCategory
          data={item?.card?.card}
          showIndex={index === showIndex}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
