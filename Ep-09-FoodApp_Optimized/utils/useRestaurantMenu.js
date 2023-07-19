import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (restaurantId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  fetchData = async () => {
    const response = await fetch(MENU_API + restaurantId);
    const jsonData = await response.json();
    setResInfo(jsonData.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
