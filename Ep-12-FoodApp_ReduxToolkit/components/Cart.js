import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-2 p-2 w-6/12 mx-auto">
      <h1 className="font-bold text-lg m-4 p-4">Cart</h1>
      {cartItems.length === 0 ? (
        <span className="font-semibold">
          Cart is Empty. Please add some items in cart.
        </span>
      ) : (
        <button
          className="bg-slate-400 hover:bg-slate-600 p-1 rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      )}
      <ItemList data={cartItems} />
    </div>
  );
};

export default Cart;
