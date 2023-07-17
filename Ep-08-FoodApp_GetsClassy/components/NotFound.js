import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  console.log("error", error);
  return (
    <div>
      <h1>OOPS....... Something Went Wrong</h1>
      <h1>
        {error.status} : {error.statusText}
      </h1>
    </div>
  );
};

export default NotFound;
