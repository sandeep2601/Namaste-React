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
    restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (data, index) => {
        if (index != 0 && data?.card?.card?.title == "Recommended") {
          return data;
        }
      }
    )[0]?.card?.card;

  return (
    <div className="m-2 p-2">
      <h1 className="font-bold py-2 text-xl">{name}</h1>
      <div className="flex text-lg font-semibold">
        <h3>{cuisines.join(", ")}</h3>
        &nbsp;&nbsp; - &nbsp;&nbsp;
        <h3>{costForTwoMessage}</h3>
      </div>
      &nbsp;
      <h1 className="text-xl font-bold mb-1">Menu:</h1>
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
      <table className="border-4 border-solid border-slate-500">
        <thead>
          <tr className="bg-slate-500">
            <th>Recipies</th>
            {/* <th>&nbsp;&nbsp;&nbsp;</th> */}
            <th>Cost</th>
          </tr>
        </thead>
        <tbody className="[&>*:nth-child(even)]:bg-red-200 [&>*:nth-child(odd)]:bg-gray-200">
          {itemCards?.map((item) => {
            return (
              <tr className="border border-solid" key={item.card.info.id}>
                <td className="px-2">{item.card.info.name}</td>
                {/* <td>&nbsp;&nbsp;&nbsp;</td> */}
                <td className="px-2">
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
