import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  const { restaurantId } = useParams();

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const response = await fetch(MENU_API + restaurantId);
    const result = await response.json();
    const data = [];
    // data.push(`restaurantData: ${result?.data?.cards[0]?.card?.card?.info}`);
    data.push(result?.data?.cards[0]?.card?.card?.info);
    data.push(
      result?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
    setRestaurantMenu(data);
  };

  return restaurantMenu === null ? (
    <Shimmer />
  ) : (
    <div>
      <h1>{restaurantMenu[0].name}</h1>
      <h3>{restaurantMenu[0].cuisines.join(", ")}</h3>
      <h3>{restaurantMenu[0].costForTwoMessage}</h3>
      <h1>Menu:</h1>
      {/* <ul>
        {restaurantMenu[1].map((item) => {
          return (
            <li key={item.card.info.id}>
              {item.card.info.name}&nbsp;&nbsp;&nbsp;&nbsp;
              {"- "}&nbsp;&nbsp;&nbsp;&nbsp;Rs.{" "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
              /-
            </li>
          );
        })}
      </ul> */}

      <table>
        <thead>
          <th>
            <tr>
              <td>Recipies</td>
              <td>Cost</td>
            </tr>
          </th>
        </thead>
        <tbody>
          {restaurantMenu[1].map((item) => {
            return (
              <tr key={item.card.info.id}>
                <td>{item.card.info.name}</td>
                <td>
                  Rs.{" "}
                  {item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100}
                  /-
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantMenu;
