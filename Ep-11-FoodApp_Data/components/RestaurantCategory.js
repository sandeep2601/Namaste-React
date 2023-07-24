import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="w-6/12 mx-auto shadow-lg bg-gray-50 my-4 p-4">
      <div className="flex justify-between" onClick={() => handleClick()}>
        <span className="font-bold">
          {data?.title} ({data?.itemCards.length})
        </span>
        <span>🔻</span>
      </div>
      {isVisible && <ItemList data={data?.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
