import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showIndex, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="w-6/12 mx-auto shadow-lg bg-gray-50 my-4 p-4">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold">
          {data?.title} ({data?.itemCards.length})
        </span>
        <span>🔻</span>
      </div>
      {showIndex && <ItemList data={data?.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
