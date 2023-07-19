import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();
  const restaurantInfo = useRestaurantMenu(restaurantId);

  if (restaurantInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    restaurantInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (data, index) => {
        if (index != 0 && data?.card?.card?.title == "Recommended") {
          return data;
        }
      }
    )[0]?.card?.card;

  return (
    <div>
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h1>Menu:</h1>
      {/* <ul>
        {itemCards.map((item) => {
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
          {itemCards?.map((item) => {
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
