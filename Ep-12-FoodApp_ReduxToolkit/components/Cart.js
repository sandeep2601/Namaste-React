import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="text-center m-2 p-2 w-6/12 mx-auto">
      <h1 className="font-bold text-lg m-4 p-4">Cart</h1>
      {cartItems.length === 0 && (
        <span>Cart is Empty. Please add some items in cart.</span>
      )}
      <ItemList data={cartItems} />
    </div>
  );
};

export default Cart;
