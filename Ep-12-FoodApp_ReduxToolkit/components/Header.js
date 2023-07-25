import { APP_LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

export const Header = () => {
  const onlineStatus = useOnlineStatus();
  const user = useContext(UserContext);
  return (
    <div className="flex justify-between border border-solid h-24 bg-orange-100">
      <div className="h-full">
        <img className="h-full" src={APP_LOGO_URL} />
      </div>
      <div>
        <ul className="flex m-2 p-2">
          <li className="p-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="p-4">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4">
            <Link to="/about">About</Link>
          </li>
          <li className="p-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="p-4">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="p-4 font-bold">{user.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
