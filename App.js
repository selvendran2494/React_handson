import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Aboutus from "./src/components/Aboutus";
// import Contactus from "./src/components/Contactus";
import Error from "./src/components/Error";
import Restaurantmenu from "./src/components/Restaurantmenu";
import UserContext from "./src/utils/Usercontext";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
import AddtoCart from "./src/components/AddtoCart";


const Contactus = lazy(() => import("./src/components/Contactus"));

const AppLayout = () => {
  const [userName,setUserName]=useState("Selva");
  return (
    <div className="app">
      <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
      <Header />
      <Outlet />
      </UserContext.Provider>
      </Provider>
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "home",
        element: <Body />,
      },
      {
        path: "/about-us",
        element: <Aboutus />,
      },
      {
        path: "/add-to-cart",
        element: <AddtoCart/>,
      },
      {
        path: "/contact-us",
        element: (
          <Suspense fallback={<h1> loading ....</h1>}>
            <Contactus />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resid",
        element: <Restaurantmenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
