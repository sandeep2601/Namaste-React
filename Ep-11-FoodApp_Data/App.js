import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";

const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [loggedUser, setLoggedUser] = useState("Sandeep Verma");
  return (
    <UserContext.Provider value={{ loggedInUser: loggedUser, setLoggedUser }}>
      <div>
        <UserContext.Provider value={{ loggedInUser: loggedUser }}>
          <Header />
        </UserContext.Provider>
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>About is loading</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:restaurantId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />);
