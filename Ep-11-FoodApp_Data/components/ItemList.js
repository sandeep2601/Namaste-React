import { CDN_RESTAURANT_LOGO_URL } from "../utils/constants";

const ItemList = ({ data }) => {
  console.log("data", data);
  return (
    <div>
      {data?.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="flex text-left border-b-2 border-gray-200 p-2 m-2"
        >
          <div className="w-9/12">
            <span className="font-semibold">{item?.card?.info?.name}</span>
            <br />
            <span>
              ₹{" "}
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </span>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <img
              src={CDN_RESTAURANT_LOGO_URL + item?.card?.info?.imageId}
              alt="Receipe Image"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
