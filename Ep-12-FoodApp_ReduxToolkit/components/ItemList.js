import { useDispatch } from "react-redux";
import { CDN_RESTAURANT_LOGO_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ data }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

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
            <p className="text-sm">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-4 relative">
            <img
              className="w-full h-auto"
              src={CDN_RESTAURANT_LOGO_URL + item?.card?.info?.imageId}
              alt="Receipe Image"
            />
            <button
              className="bg-slate-400 hover:bg-slate-600 absolute top-3/4 left-2/4 p-1 rounded-lg"
              onClick={() => handleAddItem(item?.card?.info)}
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
